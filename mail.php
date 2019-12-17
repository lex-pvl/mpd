<?php 
    $ip = $_SERVER['REMOTE_ADDR'];
    $dataArray = json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".$ip),true);
    var_dump($dataArray);
    $to = "kirill@mpd.ae,yury@mpd.ae,clifrdh7@robot.zapier.com,leads@mcd.ae"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $ref =  $_SERVER["HTTP_REFERER"];
    $subject = "Property Management Enquiry";
    $country = $dataArray["geoplugin_countryName"];
    $message = "From Page: $ref; \n\n \n\n Name: ".$name  . "\n\n \n\n Phone: " . $phone." \n\n \n\n Email: ".$from." \n\n \n\n Referer: ". $ref." \n\n \n\n Country: " .$country;

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent!";


/*{
  "geoplugin_request":"91.75.68.170",
  "geoplugin_status":200,
  "geoplugin_delay":"1ms",
  "geoplugin_credit":"Some of the returned data includes GeoLite data created by MaxMind, available from <a href='http:\/\/www.maxmind.com'>http:\/\/www.maxmind.com<\/a>.",
  "geoplugin_city":"Dubai",
  "geoplugin_region":"Dubai",
  "geoplugin_regionCode":"DU",
  "geoplugin_regionName":"Dubai",
  "geoplugin_areaCode":"",
  "geoplugin_dmaCode":"",
  "geoplugin_countryCode":"AE",
  "geoplugin_countryName":"United Arab Emirates",
  "geoplugin_inEU":0,
  "geoplugin_euVATrate":false,
  "geoplugin_continentCode":"AS",
  "geoplugin_continentName":"Asia",
  "geoplugin_latitude":"25.2582",
  "geoplugin_longitude":"55.3047",
  "geoplugin_locationAccuracyRadius":"1000",
  "geoplugin_timezone":"Asia\/Dubai",
  "geoplugin_currencyCode":"AED",
  "geoplugin_currencySymbol":"Dh",
  "geoplugin_currencySymbol_UTF8":"Dh",
  "geoplugin_currencyConverter":3.673
} */
?>