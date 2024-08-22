<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/frontend/style.css">
    
  
    <title>Calculater</title>
</head>
<body>
    <div class="calculator">
        <div class="input" id="input"></div>
        <div class="buttons">
          <div class="operators">
            <div>+</div>
            <div>-</div>
            <div>&times;</div>
            <div>&divide;</div>
          </div>
          <div class="leftPanel">
            <div class="numbers">
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
            <div class="numbers">
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
            <div class="numbers">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div class="numbers">
              <div>0</div>
              <div>.</div>
              <div id="clear">C</div>
            </div>
          </div>
          <div class="equal" id="result">=</div>
        </div>
      </div>


      <script src="/frontend/cal.js"></script>
</body>
</html>