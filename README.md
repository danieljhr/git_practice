```
var coreCanvas = new CoreFabric("id_contenedor");
```
Las modificaciones del canvas se harán a traves de funciones por ende la instancia debe tener funciones especificas para cada acción en el canvas. Todas las funciones deben ser Promesas para manejar la reactividad.

#### Global functionalities
- Zoom In **coreCanvas.zoomIn( point[optional] )**  parameter point = object { x: int, y: int }
- Zoom Out **coreCanvas.zoomOut()**
- Open Move Canvas Mode **coreCanvas.openMoveMode()**
- Close Move Canvas Mode **coreCanvas.closeMoveMode()**
- Get all layers  **coreCanvas.getLayers()**
- Select All **coreCanvas.selectAll()**
- Add resource/shape  **coreCanvas.newElement()**
- Add text  **coreCanvas.newFontElement()** var defaul { left:0, top: 0, fontSize: "12", fontFamily:"arial", fontWeight: null, fill: '#333', originX:"center", 	originY:"center",	lineHeight: 1.1, textAlign: "left"}
- Global **coreCanvas.switchScopeColors()** global o especific
- Create Undo Redo **coreCanvas.createUndoRedo()**
- Action Undo Redo **coreCanvas.actionUndoRedo()** var num : int;
- Save Cache Canvas **coreCanvas.saveCacheCanvas()**
- Load Cache Canvas **coreCanvas.loadCacheCanvas()**

#### Grid Options
- Add Guides **coreCanvas.addGuides()**
- Show/hide Guides **coreCanvas.switchGuides()**
- Center Guides **coreCanvas.switchCenterGuides()**
- Snap to Grid **coreCanvas.switchSnap()**

#### General Options
- Load JSON Design **coreCanvas.loadJSON(json[required])**  var json : json;
- Load PNG File **coreCanvas.loadPNG(value[required])**  var idObjects : string base64;
- Load SVG File **coreCanvas.loadSVG(value[required])**  var idObjects : string base64;
- Get JSON Data **coreCanvas.getJSON()** return json
- Get PNG Base64  **coreCanvas.getPNG(value[required])**  var medida : int
- Get SVG Data  **coreCanvas.getSVG()** return svg string

#### Color Palettes
- Color Assign **coreCanvas.setColors()**
- Reset Colors **coreCanvas.resetColors()**
- Solid colors & gradients colors **pendiente pendiente**
- Actual Colors **coreCanvas.getColors()**

#### Color Element Epecific
-Color **coreCanvas.element.colorElementEspecific(colorBase[require], colorUpdate[require])**  var colorBase : string, colorUpdate : string

### Element
- Open edit mode **coreCanvas.element.openEditMode()**
- Close edit mode **coreCanvas.element.closeEditMode()**
- Copy **coreCanvas.element.copy()**
- Paste **coreCanvas.element.paste()**
- Paste **coreCanvas.element.cloned()**
- Lock  **coreCanvas.element.lock()**
- unlock  **coreCanvas.element.unlock()** var **idObjects**
- Hidden  **coreCanvas.element.hide()** 
- Visible  **coreCanvas.element.show(id[required])** var idObjects : int
- Delete **coreCanvas.element.delete(id[required])** var idObjects : int
- Send to Back **coreCanvas.element.sendToBack()**
- Send to Front **coreCanvas.element.sendToFront()**
- Send Backward **coreCanvas.element.sendToBackward()**
- Send Frontward **coreCanvas.element.sendToFrontward()**
- Actual Layer Colors **coreCanvas.element.getColors()**
- Reset Layer Colors **coreCanvas.element.resetColors()**
- Set Layer Color **coreCanvas.element.setColors()**
- Shadow on/off **coreCanvas.element.setGradient(value)** var 
- Rotate **coreCanvas.element.rotate(angle[required])** var angle : int
- Opacity **coreCanvas.element.opacity(opacity[required])** var opacity : int
- Size **coreCanvas.element.scale(scaleX[require],scaleY[require])**  var scaleX : int, scaleY
- Mirror Horizontal **coreCanvas.element.mirrorX()** return bool
- Mirror Vertical **coreCanvas.element.mirrorY()** return bool
- Shadow on/off **coreCanvas.element.switchShadow()**
- Edit shadow **coreCanvas.element.editShadow()** var {color: "red", blur: 50, offsetX: 50, offsetY: 30}
- Font Family **coreCanvas.element.setFontFamily(name[required])** var name : string
- Font Size **coreCanvas.element.setFontSize(sizeFont[required])** var sizeFont : int
- Text Align  **coreCanvas.element.setFontAlign(AlignFont[required])** var AlignFont : string
- Align Element **coreCanvas.element.setAlign(ElementAlign[required])** var ElementAlign : string "top , middle, bottom, left, center, rigth"
- Align Element **coreCanvas.element.alignSelectedToObjects(ElementAlign[required])** var ElementAlign : string "top , middle, bottom, left, center, rigth"
- Dimension Element **coreCanvas.element.dimensionSelectedObjects()** 




### Font Styles
- Text Color  **coreCanvas.element.setSelectionStylesFontColor(FillFont[required])** var FillFont string
- Text FontFamily  **coreCanvas.element.setSelectionStylesFontFamily(FontFamily[required])** var FontFamily string
- Text FontWeight  **coreCanvas.element.setSelectionStylesFontWeight(FontWeight[required])** var FontWeight string
- Text FontSize  **coreCanvas.element.setSelectionStylesFontSize(FontSize[required])** var FontSize int
- Text FontUnderline  **coreCanvas.element.setSelectionStylesFontUnderline(FontUnderline[required])** var FontUnderline Bool
- Text Linethrough  **coreCanvas.element.setSelectionStylesFontLinethrough(Linethrough[required])** var Linethrough Bool

#### Events handlers
- Design loaded **coreCanvas.on("design-loaded", function )**
- Layer created **coreCanvas.on("layer-created", function )**
- Layer deleted **coreCanvas.on("layer-deleted", function )**
- Layer selected **coreCanvas.on("layer-selected", function )**
- Layer unselected **coreCanvas.on("layer-unselected", function )**
- Edit mode opened **coreCanvas.on("edit-mode-opened", function )**
- Edit mode closed **coreCanvas.on("edit-mode-closed", function )**

