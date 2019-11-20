

```
var coreCanvas = new CoreFabric("id_contenedor");
```
Las modificaciones del canvas se harán a traves de funciones por ende la instancia debe tener funciones especificas para cada acción en el canvas

#### Global functionalities
- Edit Text **coreCanvas.editText()**
- Zoom In **coreCanvas.zoomIn()**
- Zoom Out **coreCanvas.zoomOut()**
- Move Canvas **coreCanvas.zoomIn()**
- ~~Group~~
- ~~Ungroup~~
- Delete **coreCanvas.delete()**
- Copy **coreCanvas.copy()**
- Paste **coreCanvas.paste()**
- Add Grid **coreCanvas.addGrid()**
- Remove Grid **coreCanvas.removeGrid()**
- Select All **coreCanvas.selectAll()**

#### Arrage tools 
- Send to Back **coreCanvas.sendToBack()**
- Send to Front **coreCanvas.sendToFront()**
- Send Backward **coreCanvas.sendToBackward()**
- Send Frontward **coreCanvas.sendToFrontward()**

#### Color Palettes
- Solid colors & gradients colors
- Actual Colors **coreCanvas.getColors()**
- Reset Colors **coreCanvas.resetColors()**
- Color Assign **coreCanvas.setColors()**
- Global **coreCanvas.switchToGlobalColors()**
- Especific **coreCanvas.switchToSpecificColors()**			

#### Transformation tools
- Rotate **coreCanvas.rotate()**
- Opacity **coreCanvas.opacity()**
- Size **coreCanvas.scale()** 
- Mirror Horizontal **coreCanvas.mirrorX()**
- Mirror Vertical **coreCanvas.mirrorY()**
- Shadow on/off **coreCanvas.switchShadow()**
- Edit shadow **coreCanvas.editShadow()**

#### Text Options
- Font Family **coreCanvas.setFontFamily()**
- Font Size **coreCanvas.setFontSize()**
- Font Color  **coreCanvas.setFontColor()**
- Text Align  **coreCanvas.setFontAlign()**
- Add Text  **coreCanvas.newFontElement()**

#### Layer Options
- Lock  **coreCanvas.lockLayer()**
- Hidden  **coreCanvas.hideLayer()**
- Visible  **coreCanvas.showLayer()**

#### Shape & Resources
- Add resource/shape  **coreCanvas.newElement()**

#### Grid Options
- Add Guides **coreCanvas.addGuides()**
- Show/hide Guides **coreCanvas.switchGuides()**
- Center Guides **coreCanvas.switchCenterGuides()**
- Snap to Grid **coreCanvas.switchSnap()**

#### General Options
- Get JSON Data **coreCanvas.getJSON()**
- Get PNG Base64  **coreCanvas.getPNG()**
- Get SVG Data  **coreCanvas.getSVG()**
