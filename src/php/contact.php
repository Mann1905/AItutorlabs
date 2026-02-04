<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$response = [];

try {
    $mail = new PHPMailer(true);

    // SMTP config
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'aitutorlabs.in@gmail.com';          // your Gmail
    $mail->Password = 'ofmd zvgs sqks udjl';         // replace with NEW app password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('aitutorlabs.in@gmail.com', 'Mentor');
    $mail->addAddress('aitutorlabs.in@gmail.com');
    $mail->isHTML(true);

    // Get form fields safely
    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';

    $mail->Subject = 'Contact Form Submission';

    $bodyText = "Name: $name\nPhone No: $phone\nMessage: $message";
    $mail->Body = nl2br(htmlspecialchars($bodyText));

    $mail->send();
    $response['message'] = 'Form sent successfully!';
} catch (Exception $e) {
    http_response_code(500);
    $response['error'] = 'Mailer Error: ' . $e->getMessage();
}

echo json_encode($response);
?>
