

/***********************************************************************************
 * 
 * How to use de SourceLoader class
 * 
 * Create instance of SourceLoader 
 * var loader = new SourcesLoader("loader-component", "/category/abstract");
 * 
 * Get source string svg 
 * loader.svg_loaded = (svgstring) => { use here your data } 
 * 
 * Switch category are being loaded
 * loader.switch_endpoint("/category/newcategory", true);
 * 
 * 
 * If you want modify styles of components
 * you can edit the 'style_component' variable
 * 
 * ********************************************************************************/



class SourcesLoader {

    // Status of loader
    current_page = 0;
    items_count = 0;
    total_pages = 15;
    search_text = "";
    items_per_page = 15;
    total_items = 221;
    is_loading = Boolean.prototype;
    load_finished = Boolean.prototype; 

    // Data loaded
    items_loaded = Array.prototype;
    items_to_add = Array.prototype;

    // User defined props
    id_element; 
    api_endpoint;

    // Api url props
    url_api_sources;
    url_api_endpoint;

    // Elements DOM accessible 
    container = HTMLElement.prototype;
    scroll_area = HTMLElement.prototype;
    items_content = HTMLElement.prototype;
    lazy_loader = HTMLElement.prototype;
    loader_item = HTMLElement.prototype;
    search_item = HTMLElement.prototype;

    
    // Elements template
    list_items = `<div class="item-content"></div>`;

    constructor (id_elem, endpoint) {
        this.id_element = id_elem;
        this.api_endpoint = endpoint;
        this.initialize_status(true);
    }

    set _items_loaded(items){
        this.items_to_add = items;
        this.items_loaded = [...this.items_loaded, ...items];
        this.append_items();
    }

    get query_id(){ return "#"+this.id_element }



    async initialize_status(){
        // Set elements DOM
        this.container = document.querySelector(this.query_id);
        
        await this.init_dom();
        
        // Settings properties
        this.load_finished = false;
        this.is_loading = false;
        this.url_api_sources = document.querySelector(`meta[name="url-api-sources"]`).content;
        this.url_api_endpoint = await this.api_url(this.api_endpoint);
        await this.load_data();
        await this.add_listeners();
    }

    async default_status(){
        this.load_finished = false;
        this.is_loading = false;
        this.url_api_endpoint = await this.api_url(this.api_endpoint);
        await this.load_data();
    }

    async api_url(endpoint){
        return this.url_api_sources + endpoint;
    }

    /**********************************
     * 
     * REQUEST DATA FUNCTION
     * 
     * This function execute each time
     * that data is requested to server
     * 
     * ********************************/

    async clean_items(){
        while(this.items_content.hasChildNodes()){
            this.items_content.removeChild(this.items_content.firstChild);
        }
    }

    async append_items(){
        await this.items_to_add.forEach( async (item_data) => {
            let item_dom = await this.item_content(item_data);
            this.items_content.appendChild(item_dom);
        });

        this.items_to_add = [];
        this.is_loading = false;
    }

    async load_data(){
        this.is_loading = true;

        let fetch_data = await fetch(this.url_api_endpoint)
            .then(data => data.json()).then(data => data)
            .catch(error => console.log("Error fetching", error));
        
        this.current_page = fetch_data.current_page;
        this.items_count = fetch_data.to;
        this.total_pages = fetch_data.last_page;
        this.total_items = fetch_data.total;
        this.url_api_endpoint = fetch_data.next_page_url;
        this._items_loaded = fetch_data.data;

        if (this.url_api_endpoint == null){
            this.stop_loader();
        }
    }


    async init_dom(){
    
        await this.container.classList.add("loader-component");
        this.scroll_area = await document.createElement("div");
            this.scroll_area.classList.add("scroll-area");
            await this.container.appendChild(this.scroll_area);
            
        this.search_item = await this.search_field();
             await this.scroll_area.appendChild(this.search_item);

        this.items_content = await document.createElement("div");
            this.items_content.classList.add("items-content");
            await this.scroll_area.appendChild(this.items_content);
        
        this.lazy_loader = await document.createElement("div");
            this.lazy_loader.classList.add("lazy-loader");
            await this.scroll_area.appendChild(this.lazy_loader);

        this.loader_item = await document.createElement("div");
            this.loader_item.classList.add("loader-item");
            await this.lazy_loader.appendChild(this.loader_item);

        for (let index = 0; index < 4; index++) {
            await this.loader_item.appendChild(document.createElement("div"));             
        }

    }

    async search_field(){
        let search_container = await document.createElement("div");
            search_container.classList.add("search-container");

        let svg_search_icon = await document.createElement("div");
            svg_search_icon.classList.add("search-icon");
            svg_search_icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
            
        let search_field = await document.createElement("input");
            search_field.type = "text";
            search_field.placeholder = "Type to search";
            search_field.classList.add("search-field");            
            

        let svg_clear_icon = await document.createElement("div");
            svg_clear_icon.classList.add("clear-icon", "hidden");
            svg_clear_icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
            svg_clear_icon.show = () => {
                svg_clear_icon.classList.remove("hidden");
            };
            svg_clear_icon.hide = () => {
                svg_clear_icon.classList.add("hidden");
            };


            // Listeners of search field elements
            
            svg_clear_icon.onclick = () => { 
                search_field.value = "";
            };

            search_field.onkeyup = () => {
                let {value} = search_field;
                console.log("Change", value);
                if (value !== "") { svg_clear_icon.show() }
                else { svg_clear_icon.hide() }
            }   

            search_container.appendChild(svg_search_icon);
            search_container.appendChild(search_field);
            search_container.appendChild(svg_clear_icon);

        return search_container;
    }

    add_listeners(){                    
        this.scroll_area.onscroll = (event) => {
            try {
                if(this.load_finished) throw "Load items finished";
                let scroll_coords = this.scroll_area.getBoundingClientRect();
                let loader_coords = this.lazy_loader.getBoundingClientRect();
                console.log(scroll_coords, loader_coords);
                if (scroll_coords.bottom > loader_coords.top && !this.is_loading) {
                    // Scroll ends up 
                    this.load_data();
                }
            } catch (error) {
                // All items was loaded
            }
            
        }
    }

    svg_loaded(svg_data){
        console.log("Loaded", svg_data);
    }

    async load_svg_src(url_src){
        let svg_string = await fetch(url_src)
            .then(data => data.text())
            .then(data => data );
        console.log("To load", url_src);
        this.svg_loaded(svg_string);
    }

    async item_content(data){
        let item_content = document.createElement("div");
            item_content.id = data.uuid_key;
            item_content.className = "item-content";
            item_content.onclick = () => this.load_svg_src(data.url_svg);
        
        let item_image = new Image();
            item_image.src = data.url_thumb;

        item_content.appendChild(item_image);
        return item_content;
    }

    async stop_loader(){
        this.lazy_loader.remove();
        this.load_finished = true;
    }

    async start_loader(){
        this.scroll_area.appendChild(this.lazy_loader);
        this.load_finished = false;
    }

    async reset_status(){
        await this.clean_items();
        await this.start_loader();
        await this.default_status();
    }

    async switch_endpoint(endpoint, reset = false){
        this.api_endpoint = endpoint;
        if (reset) this.reset_status();
    }

}


var style_component = `

    .loader-component {
        min-width: 100%;
        width: 100%;
        height: 100%;
        max-height: 100%;   
        background-color: gainsboro;
        display: flex;
        padding: .3rem;
    }

    .loader-component > .scroll-area {
        width: 100%;
        height: 100%;
        flex: 1 1;
        background-color: whitesmoke;
        padding: .3rem;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
    
    .scroll-area > .items-content {
        padding: .8rem .3rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
        grid-auto-rows: 180px;
        grid-gap: 10px;
        padding-bottom: 3rem;
    }

    .scroll-area > .search-container {
        max-height: 40px;
        min-height: 40px;
        position: sticky;
        flex: 1 0;
        top: 0px;
        width: 100%;
        max-width: calc(100% - (1rem));
        background-color: #ffffff;
        box-shadow: 0 0 10px #0002;
        border-radius: 5px;
        display: flex;
        padding: 0rem .5rem;
        align-items: center;
    }

    .search-container > .search-icon{
        margin-right: .5rem;
        display: flex;
    }

    .search-container > .clear-icon{
        margin-left: .5rem;
        display: flex;
        transition: all .5s ease-in-out;
        opacity: 1;
    }

    .search-container > .clear-icon.hidden{
        opacity: 0;
    }

    .scroll-area .search-field {
        border: none;
        flex: 1 0;
        height: 100%;
        outline: none;
    }

    .items-content > .item-content {
        box-shadow: 0px 0px 4px #0002;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .lazy-loader {
        max-width: 100%;
        padding: 3rem 1rem;
        display: flex;
        justify-content: center;
    }

    .loader-item {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
    }
    .loader-item div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        margin: 6px;
        border: 6px solid #3498db;
        border-radius: 50%;
        animation: loader-item 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #3498db transparent transparent transparent;
    }
    .loader-item div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .loader-item div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .loader-item div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes loader-item {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

var style_tag = document.createElement("style");
style_tag.innerHTML = style_component;
document.head.appendChild(style_tag);

