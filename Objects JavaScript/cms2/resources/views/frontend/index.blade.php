 
<!DOCTYPE html>
<html lang="en">
 <head>
    @include('components.layout')
  
    <!-- <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="block.js"></script>
    <title>Block Manipulation</title> -->
    <!-- <link ref="" -->
    <link rel="stylesheet" href="/Frontend/style.css">
 </head>
 <body>
    <div class="menue">
      <div class="block">
        <h3 class="block-heading">Position y</h3>
        <div class="wrapper vertical">
            <input type="range" id="pos-y" min="0" max="600" value="0">
            <label for="pos-y">
                <span>0</span>
                <span>600</span>
            </label>
        </div>
      </div>
      <div class="block">
        <h3 class="block-heading">Position X</h3>
        <div class="wrapperal horizental">
            <label for="pos-x">
                <span>0</span>
                <span>800</span>
            </label>
            <input type="range" id="pos-x" min="0" max="800" value="0">
           
        </div>
      </div>
      <div class="block">
        <h3 class="block-heading">Size</h3>
        <div class="wrapper horizental">
            <label for="size">
                <span>0</span>
                <span>2</span>
            </label>
            <input type="range" id="size" min="0" max="2" step="0.1">
            
        </div>
      </div>
      <div class="block">
        <h3 class="block-heading">Opacity</h3>
        <div class="wrapper horizental">
            <label for="Opacity">
                <span>0</span>
                <span>1</span>
            </label>
            <input type="range" id="opacity" min="0" max="1" step="0.01" value="1">
            
        </div>
      </div>
      <div class="block">
        <h3 class="block-heading">Shape Type</h3>
        <div class="wrapper center">
            <select  id="shape-select">
                <option value="1">Square</option>
                <option value="2">Circle</option>
                <option value="3">Rhombas</option>
            </select>
            <button id="ok-shape">
                OK
            </button>
        </div>
      </div>
      <div class="block">
        <h3 class="block-heading">HEX</h3>
        <div class="wrapper hex-contant" >
            <label for="hex">#</label>
            <input type="text" id="hex" style="width: 85px;" >
            
        </div>
      </div>
      <div class="block">
        <h3 class="block-heading">RGBA</h3>
        <div class="wrapper rgba-container">
        <input type="range" min="0" max="255" value="255" id="rgba-r"><label for="rgba-r" >r</label>
        <input type="range" min="0" max="255" value="0" id="rgba-g"><label for="rgba-g" >g</label>
        <input type="range" min="0" max="255" value="0" id="rgba-b"><label for="rgba-b" >b</label>
        <input type="range" min="0" max="1" value="1"  step="0.01" id="rgba-a"><label for="rgba-a" >a</label>
        </div>
      </div>

    </div>
    <div class="container">
       <div id="block"></div>
    </div>
    <script src="/frontend/block.js"></script>
  </body>
</html>


    
