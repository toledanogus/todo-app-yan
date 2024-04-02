<?php
require 'conection.php';

$json_data = file_get_contents("php://input");
$x = json_decode($json_data);

$respuesta = mysqli_query($conn, "DELETE FROM tareasyan WHERE id = '".$x->tareaID."'");

if ($respuesta) {
    // Si la eliminación fue exitosa, podrías devolver algún mensaje indicando el éxito
    echo json_encode(["success" => true]);
} else {
    // Si ocurrió un error durante la eliminación, podrías devolver un mensaje de error
    echo json_encode(["success" => false, "error" => mysqli_error($conn)]);
}
?>