<?php 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $user = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
    $city = filter_var($_POST['city'], FILTER_SANITIZE_EMAIL);
    $cell = filter_var($_POST['cellphone'], FILTER_SANITIZE_NUMBER_INT);
    $msg  = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    
    $formErrors = array();
    
    if (strlen ($user) <= 3) {
        
        $formErrors[]='user name must larger be than <strong>3</strong> charcter';
    }
    
    if (strlen ($city) <= 3) {
        
        $formErrors[]='your city must be than <strong>3</strong> charcter';
    }
      if (strlen ($cell) <= 10) {
        
        $formErrors[]='your phone must be than <strong>11</strong> number';
    } 
 
    if (strlen ($msg) <= 10) {
        
        $formErrors[]='your message must be than <strong>11</strong> charcter';
    }
    
    $headers = 'from:' . $user .'\r\n';
    $myemail ='ahmedamr2052000@gmail.com';
    $subject ='contact form';
    
    if(empty($formErrors)) {
        
        mail($myemail, $subject , $msg , $headers);
        
            $user ='';
            $city ='';
            $cell ='';
            $msg  ='';
        
        $sucess = '<div class = "alert alert-success">لقد تم استلام رسالتك بنجاح وسنقوم بالرد عليك في خلال ساعات</div> ';
    }
      
}

?>
<!DOCTYPE>
<html lang="en">

    <head>
    
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>سجل معنا</title>
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/fontawesome.min.css"/>
        <link rel="stylesheet" href="css/style.css"/>
   <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900,900i&display=swap" rel="stylesheet">
    </head>
    <body>
            <!-- ******START FORM******** -->
        
        <div class="container">
            <h1 class="text-center">لحل المشاكل الأن</h1>
            <form class="contact-form" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
            
            <?php if (! empty ($formErrors)){ ?>
                
                <div class="alert alert-danger alert-dismissible" role="start">
                    <button class="close" type="button" data-dismiss="alert" aria-label="close" >
                     <span aria-hidden="true">&times;</span>
                    </button>
            <?php    
                foreach($formErrors as $error){
                    echo $error . '<br/>';
                      }
                     ?>
                      </div>
                  <?php  } ?>

                  
                <?php if (isset($sucess)) { echo $sucess; } ?>
                
                <div class="form-group">
                   <input 
                          class="username form-control" 
                          type="text" 
                          name="username"
                          placeholder="Your Name" 
                          value="<?php if (isset($user)) { echo $user; } ?>" />
                    <div class="alert alert-danger custom-alert">
                    
                    user name must larger be than <strong>3</strong> charcter
                    </div>
                    
               </div>
                
                  <div class="form-group">
                <input 
                       class="city form-control"
                       type="text" name="city" 
                       placeholder="Your City"
                       value="<?php if (isset($city)) { echo $city; } ?>"/>
                      <div class="alert alert-danger custom-alert">
                          your city must be than <strong>3</strong> charcter
                      </div>
           </div>
                
                  <div class="form-group">
                <input class="cell form-control"
                       type="number" 
                       name="cellphone" 
                       placeholder="Your Phone"
                       value="<?php if (isset($cell)) { echo $cell; } ?>"/>
                      <div class="alert alert-danger custom-alert">
                          your phone must be than <strong>11</strong> number
                      </div>
                  </div>
                
                  <div class="form-group">
                <textarea class="mg form-control"
                          name="message"
                          placeholder="!Your Message"><?php if (isset($msg)) { echo $msg; } ?></textarea>
                      <div class="alert alert-danger custom-alert">
                          your message must be than <strong>11</strong> charcter
                      </div>
                <input 
                       class="btn btn-primary btn-lg"
                       type="submit"
                   value="send message"/>
                        </div>
            </form>
        
        </div>
        
        
           <!-- *********END FORM******** -->

    
    
    <script src="js/jquery.js"></script>
    <script src="js/all.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/custom.js"></script>
    </body>
    
</html>