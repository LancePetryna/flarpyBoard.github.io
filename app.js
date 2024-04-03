(()=>{"use strict";var e,t={494:(e,t,s)=>{var i=s(260),n=s.n(i);class r extends n().Scene{constructor(e,t){super(e),this.config=t,this.screenCenter=[t.width/2,t.height/2],this.fontSize=34,this.lineHeight=42,this.fontOptions={fontSize:`${this.fontSize}px`,fill:"#fff"}}create(){if(this.add.image(0,0,"sky").setOrigin(0),this.config.canGoBack){this.add.image(this.config.width-10,this.config.height-10,"back").setOrigin(1).setScale(2).setInteractive().on("pointerup",(()=>{this.scene.start("MenuScene")}))}}createMenu(e,t){let s=0;e.forEach((e=>{const i=[this.screenCenter[0],this.screenCenter[1]+s];e.textGO=this.add.text(...i,e.text,this.fontOptions).setOrigin(.5,1),s+=this.lineHeight,t(e)}))}}const a=r;const c=class extends a{constructor(e){super("PlayScene",e),this.bird=null,this.pipes=null,this.pipeHorizontalDistance=0,this.pipeVerticalDistanceRange=[150,250],this.pipeHorizontalDistanceRange=[300,350],this.flapVelocity=300,this.score=0,this.scoreText=""}create(){super.create(),this.createBird(),this.createPipes(),this.createColliders(),this.createScore(),this.createPause(),this.handleInputs()}update(){this.checkGameStatus(),this.recyclePipes()}createBG(){this.add.image(0,0,"sky").setOrigin(0)}createBird(){this.bird=this.physics.add.sprite(this.config.startPosition.x,this.config.startPosition.y,"bird").setOrigin(0),this.bird.body.gravity.y=600,this.bird.setCollideWorldBounds(!0)}createPipes(){this.pipes=this.physics.add.group();for(let e=0;e<4;e++){const e=this.pipes.create(0,0,"pipe").setImmovable(!0).setOrigin(0,1),t=this.pipes.create(0,0,"pipe").setImmovable(!0).setOrigin(0,0);this.placePipe(e,t)}this.pipes.setVelocityX(-200)}createColliders(){this.physics.add.collider(this.bird,this.pipes,this.gameOver,null,this)}createScore(){this.score=0;const e=localStorage.getItem("bestScore");this.scoreText=this.add.text(16,16,"Score: 0",{fontSize:"32px",fill:"#000"}),this.add.text(16,52,`Best score: ${e||0}`,{fontSize:"18px",fill:"#000"})}createPause(){this.add.image(this.config.width-10,this.config.height-10,"pause").setInteractive().setScale(3).setOrigin(1).on("pointerdown",(()=>{this.physics.pause(),this.scene.pause(),this.scene.launch("PauseScene")}))}handleInputs(){this.input.on("pointerdown",this.flap,this),this.input.keyboard.on("keydown-SPACE",this.flap,this),this.input.keyboard.on("keydown-J",this.flap,this)}checkGameStatus(){(this.bird.getBounds().bottom>=this.config.height||this.bird.y<=0)&&this.gameOver()}placePipe(e,t){const s=this.getRightMostPipe(),i=Phaser.Math.Between(...this.pipeVerticalDistanceRange),n=Phaser.Math.Between(20,this.config.height-20-i),r=Phaser.Math.Between(...this.pipeHorizontalDistanceRange);e.x=s+r,e.y=n,t.x=e.x,t.y=e.y+i}recyclePipes(){const e=[];this.pipes.getChildren().forEach((t=>{t.getBounds().right<0&&(e.push(t),2===e.length&&(this.placePipe(...e),this.increaseScore(),this.saveBestScore()))}))}getRightMostPipe(){let e=0;return this.pipes.getChildren().forEach((function(t){e=Math.max(t.x,e)})),e}saveBestScore(){const e=localStorage.getItem("bestScore"),t=e&&parseInt(e,10);(!t||this.score>t)&&localStorage.setItem("bestScore",this.score)}gameOver(){this.physics.pause(),this.bird.setTint(16711680),this.saveBestScore(),this.time.addEvent({delay:1e3,callback:()=>{this.scene.restart()},loop:!1})}flap(){this.bird.body.velocity.y=-this.flapVelocity}increaseScore(){this.score++,this.scoreText.setText(`Score: ${this.score}`)}};const o=class extends a{constructor(e){super("MenuScene",e),this.menu=[{Scene:"PlayScene",text:"Play"},{Scene:"ScoreScene",text:"Score"},{Scene:null,text:"Exit"}]}create(){super.create(),this.createMenu(this.menu,this.setupMenuEvents.bind(this))}setupMenuEvents(e){const t=e.textGO;t.setInteractive(),t.on("pointerover",(()=>{t.setStyle({fill:"#ff0"})})),t.on("pointerout",(()=>{t.setStyle({fill:"#fff"})})),t.on("pointerup",(()=>{"Exit"===e.text?this.game.destroy(!0):"Play"===e.text?this.scene.start("PlayScene"):"Score"===e.text&&this.scene.start("ScoreScene")}))}};class h extends n().Scene{constructor(e){super("PreloadScene")}preload(){this.load.image("sky","assets/background.png"),this.load.image("bird","assets/bird.png"),this.load.image("pipe","assets/pipe.png"),this.load.image("pause","assets/pause.png"),this.load.image("back","assets/back.png")}create(){this.scene.start("MenuScene")}}const p=h;const l=class extends a{constructor(e){super("ScoreScene",{...e,canGoBack:!0})}create(){super.create();const e=localStorage.getItem("bestScore");this.add.text(...this.screenCenter,`Score: ${e||0}`,this.fontOptions).setOrigin(.5)}};const d=class extends a{constructor(e){super("PauseScene",e),this.menu=[{Scene:"PlayScene",text:"Continue"},{Scene:"MenuScene",text:"Exit"}]}create(){super.create(),this.createMenu(this.menu,this.setupMenuEvents.bind(this))}setupMenuEvents(e){const t=e.textGO;t.setInteractive(),t.on("pointerover",(()=>{t.setStyle({fill:"#ff0"})})),t.on("pointerout",(()=>{t.setStyle({fill:"#fff"})})),t.on("pointerup",(()=>{}))}},u={width:800,height:600,startPosition:{x:80,y:300}},g=[p,o,l,c,d],f=e=>new e(u),S={type:n().AUTO,...u,physics:{default:"arcade",arcade:{debug:!0}},scene:g.map(f)};new(n().Game)(S)}},s={};function i(e){var n=s[e];if(void 0!==n)return n.exports;var r=s[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.m=t,e=[],i.O=(t,s,n,r)=>{if(!s){var a=1/0;for(p=0;p<e.length;p++){for(var[s,n,r]=e[p],c=!0,o=0;o<s.length;o++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](s[o])))?s.splice(o--,1):(c=!1,r<a&&(a=r));if(c){e.splice(p--,1);var h=n();void 0!==h&&(t=h)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[s,n,r]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};i.O.j=t=>0===e[t];var t=(t,s)=>{var n,r,[a,c,o]=s,h=0;if(a.some((t=>0!==e[t]))){for(n in c)i.o(c,n)&&(i.m[n]=c[n]);if(o)var p=o(i)}for(t&&t(s);h<a.length;h++)r=a[h],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(p)},s=self.webpackChunkaltudemypackage=self.webpackChunkaltudemypackage||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var n=i.O(void 0,[736],(()=>i(494)));n=i.O(n)})();