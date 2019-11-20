

```
var coreCanvas = new CoreFabric("id_contenedor");
```
Las modificaciones del canvas se harán a traves de funciones por ende la instancia debe tener funciones especificas para cada acción en el canvas. Todas las funciones deben ser Promesas para manejar la reactividad.


#### Global functionalities
- Zoom In **coreCanvas.zoomIn()**
- Zoom Out **coreCanvas.zoomOut()**
- Open Move Canvas Mode **coreCanvas.openMoveMode()**
- Close Move Canvas Mode **coreCanvas.closeMoveMode()**

#### Layer Options
- Get all layers  **coreCanvas.getLayers()**
- Select All **coreCanvas.selectAll()**
- Add text  **coreCanvas.newFontElement()**
- Add resource/shape  **coreCanvas.newElement()**
- Open edit mode **coreCanvas.element.openEditMode()**
- Close edit mode **coreCanvas.element.closeEditMode()**
- Lock  **coreCanvas.element.lock()**
- Hidden  **coreCanvas.element.hide()**
- Visible  **coreCanvas.element.show()**
- Delete **coreCanvas.element.delete()**
- Copy **coreCanvas.element.copy()**
- Paste **coreCanvas.element.paste()**
- Send to Back **coreCanvas.element.sendToBack()**
- Send to Front **coreCanvas.element.sendToFront()**
- Send Backward **coreCanvas.element.sendToBackward()**
- Send Frontward **coreCanvas.element.sendToFrontward()**
- Actual Layer Colors **coreCanvas.element.getColors()**
- Reset Layer Colors **coreCanvas.element.resetColors()**
- Set Layer Color **coreCanvas.element.setColors()**
Transformation options
- Rotate **coreCanvas.element.rotate()**
- Opacity **coreCanvas.element.opacity()**
- Size **coreCanvas.element.scale()** 
- Mirror Horizontal **coreCanvas.element.mirrorX()**
- Mirror Vertical **coreCanvas.element.mirrorY()**
- Shadow on/off **coreCanvas.element.switchShadow()**
- Edit shadow **coreCanvas.element.editShadow()**
Typographics layers
- Font Family **coreCanvas.element.setFontFamily()**
- Font Size **coreCanvas.element.setFontSize()**
- Font Color  **coreCanvas.element.setFontColor()**
- Text Align  **coreCanvas.element.setFontAlign()**

#### Color Palettes
- Solid colors & gradients colors
- Actual Colors **coreCanvas.getColors()**
- Reset Colors **coreCanvas.resetColors()**
- Color Assign **coreCanvas.setColors()**
- Global **coreCanvas.switchToGlobalColors()**
- Especific **coreCanvas.switchToSpecificColors()**		

#### Grid Options
- Add Guides **coreCanvas.addGuides()**
- Show/hide Guides **coreCanvas.switchGuides()**
- Center Guides **coreCanvas.switchCenterGuides()**
- Snap to Grid **coreCanvas.switchSnap()**

#### General Options
- Load JSON Design **coreCanvas.loadJSON()** 
- Load PNG File **coreCanvas.loadPNG()**
- Load SVG File **coreCanvas.loadSVG()**  
- Get JSON Data **coreCanvas.getJSON()**
- Get PNG Base64  **coreCanvas.getPNG()**
- Get SVG Data  **coreCanvas.getSVG()**

#### Events handlers
- Design loaded **coreCanvas.on("design-loaded", function )**
- Layer created **coreCanvas.on("layer-created", function )**
- Layer deleted **coreCanvas.on("layer-deleted", function )**
- Layer selected **coreCanvas.on("layer-selected", function )**
- Layer unselected **coreCanvas.on("layer-unselected", function )**
- Edit mode opened **coreCanvas.on("edit-mode-opened", function )**
- Edit mode closed **coreCanvas.on("edit-mode-closed", function )**

