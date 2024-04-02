<?php
require 'conection.php';

$json_data = file_get_contents("php://input");
$x = json_decode($json_data);

$respuesta = mysqli_query($conn, "UPDATE tareasyan SET titulo = '".$x->title."', descripcion = '".$x->description."', prioridad = '".$x->priority."', fechalimite = '".$x->fecha."' WHERE id = '".$x->tareaID."'");

if ($respuesta) {
    // Si la actualización fue exitosa, podrías devolver algún mensaje indicando el éxito
    echo json_encode(["success" => true]);
} else {
    // Si ocurrió un error durante la actualización, podrías devolver un mensaje de error
    echo json_encode(["success" => false, "error" => mysqli_error($conn)]);
}
?>
