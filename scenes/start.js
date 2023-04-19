
class Starty extends Phaser.Scene
{
   

    constructor ()
    {
        super({ key: 'Starty' });
    }


    preload ()
    {
        this.load.image('violetBackground', 'assets/high_res/violetBackground.png');
        this.load.image('neutralViolet', 'assets/high_res/neutralViolet.png');
        this.load.image('displeasedViolet', 'assets/high_res/displeasedViolet.png');
        this.load.image('pleasedViolet', 'assets/high_res/pleasedViolet.png');
        this.load.image('angryViolet', 'assets/high_res/angryViolet.png');
        this.load.image('stonks', 'assets/pixel_assets/title_and_credits/stonks.png');
        
    }

    create ()
    {   
        let c1;
        let c2;
        let c3;
        let c4;
        let c5;
        let c6;
        
         

        const violetBackground = this.add.image(600,300,'violetBackground');
        

        const neutralViolet = this.add.image(300, 400, 'neutralViolet');
        neutralViolet.setScale(0.8);
        neutralViolet.setVisible(false);
        const displeasedViolet = this.add.image(300, 400, 'displeasedViolet');
        displeasedViolet.setScale(0.8);
        displeasedViolet.setVisible(false);
        const pleasedViolet = this.add.image(300, 400, 'pleasedViolet');
        pleasedViolet.setScale(0.8);
        pleasedViolet.setVisible(false);
        const angryViolet = this.add.image(300, 400, 'angryViolet');
        angryViolet.setScale(0.8);
        angryViolet.setVisible(false);



        this.graphics = this.add.graphics();

        //creates dialouge box
        this.graphics.fillStyle(0xffffff, 0.6);
        this.graphics.fillRoundedRect(50, 530, 900, 100, 32);

        //creates title for dialogue box 
        this.graphics.fillStyle(0xffffff, 1);
        this.graphics.fillRoundedRect(80, 500, 140, 30,{ tl: 10, tr: 10, bl: 0, br: 0 });


        const title = this.add.text(110, 508, 'Violet', {fontSize: 20, color: '#000000'});

        const bg = this.add.text(800, 0, 'Continue', {fontSize: 20}).setInteractive();


        let next1 = this.add.text(800, 600, 'Next', {fontSize: 30, color: '#000000'}).setInteractive();

        //dialougue line 1
        displeasedViolet.setVisible(true);
        let d1 = this.add.text(110, 550, 'Are you the new hire? Ew, I should talk to HR about hiring ugly people.', 
            {fontSize: 20, color: '#000000',  wordWrap: { width: 700 }});

        
        
        next1.once('pointerup', function (pointer) {
            
        /*
            next1.destroy();
            next2 = this.add.text(800, 600, 'Next', {fontSize: 30, color: '#000000'}).setInteractive();
            */
            next1.input.enabled = false; 
            d1.setText("");  
            
            c1 = this.add.text(80, 560, '[My mom says I look good…]', 
            {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();

            c2 = this.add.text(380, 560, '[Is that really appropriate?] ', 
            {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();

            c3 = this.add.text(710, 560, '[Hot.] ', 
            {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();


            c1.once('pointerup', c123Click, this);
    
            c2.once('pointerup', c123Click, this);
    
            c3.once('pointerup', c123Click, this);


            function c123Click (pointer){
                c1.destroy();
                c2.destroy();
                c3.destroy();
                displeasedViolet.setVisible(false);
                angryViolet.setVisible(true);

                d1.setText("Don’t talk back. ");
                next1.input.enabled = true;
                    
            }

            //d2
            next1.once('pointerup', function (pointer) {
                angryViolet.setVisible(false);
                displeasedViolet.setVisible(true);
                
                d1.setText(" Ahem - so anyways, welcome to Volatile Stocks Inc. Here, we work hard everyday to" +
                "ensure an unstable stock market. But, I’m" +
                "sure HR told you all about that in onboarding. ");  

            //d3
                next1.once('pointerup', function (pointer) {



                    d1.setText(" Typically we have new hires like you doing filing for a few months before getting to"+
                    "the real work, but we've had some, er, staffing issues lately. So you get to jump right into it. ");
                    
                    
            //d4 
                    next1.once('pointerup', function (pointer) {
                        displeasedViolet.setVisible(false);
                        pleasedViolet.setVisible(true);

                        d1.setText("Lucky you, huh? "); 
             
            //d5
                        next1.once('pointerup', function (pointer) {
                            pleasedViolet.setVisible(false);
                            neutralViolet.setVisible(true);
    
                            d1.setText("So, you’ve been assigned to Attila Co. Your job is to make their stock so"+
                            "volatile that no one wants to buy it and they go under, understand? "); 
            //d6
                            next1.once('pointerup', function (pointer) {
        
                                next1.input.enabled = false;
                                d1.setText("");  
                                
                                c4 = this.add.text(80, 560, '[I still don’t understand…]', 
                                {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();
                    
                                c5 = this.add.text(400, 560, '[No.] ', 
                                {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();
                    
                                c6 = this.add.text(490, 560, '[Not really.]', 
                                {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();
                    
                    
                                c4.once('pointerup', c456Click, this);
                        
                                c5.once('pointerup', c456Click, this);
                        
                                c6.once('pointerup', c456Click, this);
                    
            //d7        
                                function c456Click (pointer){
                                    c4.destroy();
                                    c5.destroy();
                                    c6.destroy();
                                    neutralViolet.setVisible(false);
                                    displeasedViolet.setVisible(true);
                    
                                    d1.setText("Huh? Do you want me to hold your hand? All you have to do is go around the office and complete"+
                                    " tasks for everyone. It's not hard. A baby could do it.");
                                    next1.input.enabled = true;
                                    
                                }
            //d8
                                next1.once('pointerup', function (pointer) {
                                    displeasedViolet.setVisible(false);
                                    neutralViolet.setVisible(true);
                                    d1.setText("Well, I guess I can take a few minutes to "+
                                    "show you the ropes. But you better listen closely, I won’t do this again.");

            //dd9 Tutorial
                                    next1.once('pointerup', function (pointer) {
                                        d1.setText("So, you know how stocks work, right?");
            
            //dd10
                                        next1.once('pointerup', function (pointer) {
                                            neutralViolet.setVisible(false);
                                            angryViolet.setVisible(true);
                                            d1.setText("Right?");


                                            next1.input.enabled = false;
                                            d1.setText("");  
                                            
                                            c4 = this.add.text(80, 560, '[...] ', 
                                            {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();
                                
                                            c5 = this.add.text(160, 560, '[No.]', 
                                            {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();
                                
                                            c6 = this.add.text(240, 560, '[Kinda?]', 
                                            {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();
                                
                                
                                            c4.once('pointerup', c789Click, this);
                                    
                                            c5.once('pointerup', c789Click, this);
                                    
                                            c6.once('pointerup', c789Click, this);
                                
      
                                            function c789Click (pointer){
                                                c4.destroy();
                                                c5.destroy();
                                                c6.destroy();
            //dd11                    
                                                d1.setText("You’re absolutely useless.");
                                                next1.input.enabled = true;
                                                
                                            }
            //dd12
                                            next1.once('pointerup', function (pointer) {
                                                angryViolet.setVisible(false);
                                                displeasedViolet.setVisible(true);
                                                d1.setText("Let’s start from the basics then.");

            //dd13                                    
                                                next1.once('pointerup', function (pointer) {
                                                    displeasedViolet.setVisible(false);
                                                    neutralViolet.setVisible(true);
                                                    d1.setText("We’re dealing with the New York Stock Exchange, typically known by the acronym NYSE. It runs from"+
                                                    " 9:00 AM to 4:30 PM on Mondays through Fridays. Companies use this exchange in order to raise capital. ");

            //dd14                                        
                                                    next1.once('pointerup', function (pointer) {

                                                        d1.setFontSize(17);

                                                        d1.setText("Each company gives their stock a base value - its par value. But depending on how in demand a stock is,"+
                                                        "its market price will differ from its par value. The difference between the market value and par value is the capital"+
                                                        "a company gains on purchase of stock.");
                                                   
            //dd15                                            
                                                        next1.once('pointerup', function (pointer) {

                                                            d1.setFontSize(20);

                                                            d1.setText("For example, if ABC Inc has a stock with a par value of $1 but the stock sells for $25, then ABC Inc has"+
                                                            "just raised $24 in capital. Understood?");
                                                        
                                                        next1.once('pointerup', function (pointer) {


    
                                                                d1.setText("");
                                                                
                                                            next1.input.enabled = false;
                                                            d1.setText("");  
                                            
                                                            c4 = this.add.text(60, 560, '[Why would you pay that much for something only worth $25?]', 
                                                            {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();
                                
                                                            c5 = this.add.text(60, 600, '[Why do people buy stocks?]', 
                                                            {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();
                                
                                
                                
                                                            c4.once('pointerup', c1011Click, this);
                                    
                                                            c5.once('pointerup', c1011Click, this);
                                    

                                
      
                                                            function c1011Click (pointer){
                                                                c4.destroy();
                                                                c5.destroy();
                                                                c6.destroy();

                                                                neutralViolet.setVisible(false);
                                                                angryViolet.setVisible(true);

                                                                
            //dd16                                                    
                                                                d1.setText("Obviously because investors want to make money! Seriously, did you sleep through your classes or something?");
                                                                next1.input.enabled = true;
                                                
                                                            }
            //dd17
                                                            next1.once('pointerup', function (pointer) {
                                                                angryViolet.setVisible(false);
                                                                displeasedViolet.setVisible(true);

                                                                d1.setText(" First, holding stock gives an investor rights to dividends - which are payments companies occasionally give out"+
                                                                " to owners based on proportions of their ownership. ");



                                                                next1.once('pointerup', function (pointer) {
    
                                                                    d1.setText("Some investors, though, buy stock for the purpose of reselling it later."+ 
                                                                    "They buy the stock when its cheap and then sell it when its high");

                                                                    next1.once('pointerup', function (pointer){

                                                                        displeasedViolet.setVisible(false);
                                                                        pleasedViolet.setVisible(true);
                                                                    
    
                                                                        d1.setText(" But, that strategy can get pretty dangerous when stocks are volatile. ");


                                                                        next1.once('pointerup', function (pointer) {
    
                                            
                                                                            d1.setText("");
                                                                
                                                                            next1.input.enabled = false;
                                                            
                                                                            c4 = this.add.text(60, 560, '[Volatile?]', 
                                                                            {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();
                                                
                                                                            c5 = this.add.text(60, 600, '[What does that mean?]', 
                                                                            {fontSize: 18, color: '#000000', wordWrap: { width: 700 }}).setInteractive();
                                                
                                                
                                                
                                                                            c4.once('pointerup', c1213Click, this);
                                                    
                                                                            c5.once('pointerup', c1213Click, this);
                                                    
                
                                                
                      
                                                                            function c1213Click (pointer){
                                                                                c4.destroy();
                                                                                c5.destroy();
                                                                                c6.destroy();
                
                                                                                pleasedViolet.setVisible(false);
                                                                                neutralViolet.setVisible(true);
                
                                                                                
                            //dd16                                                    
                                                                                d1.setText("When a stock is volatile - that means its price is wildly varying. That means it's risky and it puts off buyers. What happens if they buy a stock and its price suddenly plumpets? They don’t want to find out. ");
                                                                                next1.input.enabled = true;
                                                                
                                                                            }

                                                                            next1.once('pointerup', function (pointer) {
                                                                                d1.setText("Volatility can be measured by a stock's standard deviation - you do know what that is, right?  ");

                                                                                next1.once('pointerup', function (pointer) {
                                                                                    d1.setText("You can find the standard deviation of the stock over a certain period by taking the square root of the sum of the difference of squares of the mean price and each day divided by the number of days minus one.");
                                                                                 
                                                                                    
                                                                                next1.once('pointerup', function (pointer) {
                                                                                    d1.setText("So that’s where we come in. Your goal each day will be to have the stock price wildly different from the previous days in order to create the biggest standard deviation possible! That way no one will want to invest and Attila Inc will go out of business! Your goal is to create a standard deviation greater than [INSERT GOAL HERE].");
                                                                                 
                                                                                    next1.once('pointerup', function (pointer) {

                                                                                        neutralViolet.setVisible(false);
                                                                                        pleasedViolet.setVisible(true);
                                                                                        d1.setText("Well, good luck on your first day. Don’t embarrass me. ");
                                                                                     
                                                                                        
                                                                                        
                                                                                    }, this);   
                                                                                    
                                                                                }, this);
                                                                                    
                                                                                }, this);
                                                                             
                                                                                
                                                                                
                                                                            }, this);
        
                                                                            
                                                                        }, this);
    
                                                                        
                                                                    }, this);




                                                                    
                                                                }, this);


                                                            }, this);
                                                            }, this);



  
            
                                                        }, this);
                                                        
        
                                                    }, this);
    
                                                }, this);

                                            }, this);
                                            
                                           
                    
                                        }, this);
                                       
                
                                    }, this);
                                    
                                   
            
                                }, this);
    
                                
                                
        
                            }, this);
                            
                            
    
                        }, this);
                        
             
                    }, this);
         
                }, this);
    
     
            }, this);



          
         }, this);












         

        




        //dialougue line 1
        //displeasedViolet.setVisible(true);
       // let d1 = this.add.text(110, 550, 'Are you the new hire? Ew, I should talk to HR about hiring ugly people.', 
        //{fontSize: 20, color: '#000000',  wordWrap: { width: 700 }});

        /*
        this.input.keyboard.on('keydown', function (event) {

            if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.SPACE)
            {

            // event.stopPropagation();
            // event.stopImmediatePropagation();
            let d1 = this.add.text(110, 550, 'Are you the new hire? Ew, I should talk to HR about hiring ugly people.', 
            {fontSize: 20, color: '#000000',  wordWrap: { width: 700 }});

            }

        });
        */

       

        bg.once('pointerup', function (pointer) {

            this.scene.start('mainMap');

        }, this);

               
    }

    update ()
    {

                
        this.input.keyboard.on('keydown-A', event =>
        {
            console.log('Hello from the A Key!');
        });


        //dialougue line 1
       // displeasedViolet.visible = true;
       // let d1 = this.add.text(110, 550, 'Are you the new hire? Ew, I should talk to HR about hiring ugly people.', {fontSize: 20, color: '#000000',  wordWrap: { width: 700 }});


    }



}



export default Starty;