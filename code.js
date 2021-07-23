var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f8de85c3-012e-4fcf-8344-9a286bac712e","35f62070-ae43-400a-8a25-77aaef808a82","bc743cfd-3f9c-455c-ba26-3aa83cd2e8b7","b3d92d6f-9321-4487-8e8c-727e5460274f","37214893-e34e-4a3d-ad74-27bc814fbd86","adda868d-9835-4cb7-bb9f-878350e440fd"],"propsByKey":{"f8de85c3-012e-4fcf-8344-9a286bac712e":{"name":"sci_fi_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6R1r6_thyaqHGORcm3JlEVMzjsWX0mFI/category_backgrounds/background_scifi.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6R1r6_thyaqHGORcm3JlEVMzjsWX0mFI","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6R1r6_thyaqHGORcm3JlEVMzjsWX0mFI/category_backgrounds/background_scifi.png"},"35f62070-ae43-400a-8a25-77aaef808a82":{"name":"black_haori_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk/category_people/black_haori.png","frameSize":{"x":150,"y":400},"frameCount":1,"looping":true,"frameDelay":45,"version":"xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk/category_people/black_haori.png"},"bc743cfd-3f9c-455c-ba26-3aa83cd2e8b7":{"name":"gameplaywacky_13_1","sourceUrl":null,"frameSize":{"x":400,"y":398},"frameCount":2,"looping":true,"frameDelay":12,"version":"GklV8UPpRxlrKu8fixqWjkdhQP2weSCl","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":796},"rootRelativePath":"assets/bc743cfd-3f9c-455c-ba26-3aa83cd2e8b7.png"},"b3d92d6f-9321-4487-8e8c-727e5460274f":{"name":"gameplaywacky_04_1","sourceUrl":null,"frameSize":{"x":400,"y":399},"frameCount":2,"looping":true,"frameDelay":12,"version":"SgYtQL9_9hz7G8RH7ethxQGmGZ.nW1oM","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":798},"rootRelativePath":"assets/b3d92d6f-9321-4487-8e8c-727e5460274f.png"},"37214893-e34e-4a3d-ad74-27bc814fbd86":{"name":"gameplaywacky_05_1","sourceUrl":null,"frameSize":{"x":397,"y":400},"frameCount":2,"looping":true,"frameDelay":12,"version":"y3xTkCfXqMwsIOX7dx5QomVRZ_1E5qQ7","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":800},"rootRelativePath":"assets/37214893-e34e-4a3d-ad74-27bc814fbd86.png"},"adda868d-9835-4cb7-bb9f-878350e440fd":{"name":"gameplaywacky_15_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":2,"looping":true,"frameDelay":12,"version":"dhFjIMn6n7VAImsI9LMmn5b65z96HRog","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/adda868d-9835-4cb7-bb9f-878350e440fd.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var backround = createSprite(200, 200);
backround.setAnimation("sci_fi_1");
        
  
  var wall1 = createSprite(190,120,250,3);
  var wall2 = createSprite(190,260,250,3);
  var wall3 = createSprite(67,145,3,50);
  var wall4 = createSprite(67,235,3,50);
  var wall5 = createSprite(313,145,3,50);
  var wall6 = createSprite(313,235,3,50);
  var wall7 = createSprite(41,170,50,3);
  var wall8 = createSprite(41,210,50,3);
  var wall9 = createSprite(337,210,50,3);
  var wall10 = createSprite(337,170,50,3);
  var wall11 = createSprite(18,190,3,40);
  var wall12 = createSprite(361,190,3,40);
  
  var ding = createSprite(40,190,13,13);
  ding.setAnimation ("black_haori_1")
  ding.scale=0.1
  
  
  
  
  var dong1 = createSprite(100,130,10,10);
  dong1.setAnimation("gameplaywacky_05_1") ;
  dong1.scale=0.1
  var dong2 = createSprite(215,130,10,10);
   dong2.setAnimation("gameplaywacky_15_1");
   dong2.scale=0.1
  var dong3 = createSprite(165,250,10,10);
  dong3.setAnimation("gameplaywacky_04_1");
  dong3.scale=0.1
  
  var dong4 = createSprite(270,250,10,10);
  dong4.setAnimation("gameplaywacky_13_1") ;
 dong4.scale=0.1 
  dong1.velocityY = 8;
  dong2.velocityY = 8;
  dong3.velocityY = -8;
  dong4.velocityY = -8;
  
  var count = 0;
  
  playSound("assets/category_background/synthesize.mp3", true);


function draw() {
  background("white");
  text("Deaths: " + count,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(18,170,52,40);
  rect(308,170,52,40);
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  
 
  if(keyDown("right")){
    ding.x = ding.x + 2;
  }
  if(keyDown("left")){
    ding.x = ding.x - 2;
  }
  
  if(ding.isTouching(wall11)||
     ding.isTouching(wall12)||
     ding.isTouching(dong1)||
     ding.isTouching(dong2)||
     ding.isTouching(dong3)||
     ding.isTouching(dong4))
  {
     ding.x = 40;
     ding.y = 190;
     count = count + 1;
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
