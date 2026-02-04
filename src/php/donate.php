<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uploadDir = __DIR__ . '/uploads/';
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

    if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(["error" => "No file uploaded or upload error."]);
        exit;
    }

    $fileTmpPath = $_FILES['file']['tmp_name'];
    $fileName = preg_replace("/[^a-zA-Z0-9_\.-]/", "_", basename($_FILES['file']['name']));
    $fileSize = $_FILES['file']['size'];

    if ($fileSize > 20 * 1024 * 1024) {
        echo json_encode(["error" => "File size exceeds 20MB limit."]);
        exit;
    }

    $filePath = $uploadDir . $fileName;
    if (!move_uploaded_file($fileTmpPath, $filePath)) {
        echo json_encode(["error" => "File could not be uploaded."]);
        exit;
    }

    $fileUrl = 'https://' . $_SERVER['HTTP_HOST'] . '/uploads/' . $fileName;
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    $dtype = htmlspecialchars($_POST['dtype']);

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'aitutorlabs.in@gmail.com';
        $mail->Password = 'ofmd zvgs sqks udjl'; // Move to env var
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('aitutorlabs.in@gmail.com', 'Quote Form');
        $mail->addAddress('aitutorlabs.in@gmail.com', 'Your Name');
        $mail->isHTML(true);
        $mail->Subject = 'Donation from ' . $name;
        $mail->Body = "
            <p><strong>Name:</strong> $name</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Message:</strong> $message</p>
            <p><strong>Device:</strong> $dtype</p>
            <p><strong>File:</strong> <a href='{$fileUrl}' target='_blank'>Download Here</a></p>
        ";

        $mail->send();
        echo json_encode(["message" => "✅ File uploaded and email sent successfully!"]);
    } catch (Exception $e) {
        echo json_encode(["error" => "Mailer Error: {$mail->ErrorInfo}"]);
    }
}
?>
