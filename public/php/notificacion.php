<?php
require 'conection.php';
   
$respuesta = mysqli_query($conn, "SELECT notificacion FROM tareasjuntos WHERE notificacion = 1 LIMIT 1");

if (!$respuesta || mysqli_num_rows($respuesta) == 0) {
    $row = 0;
} else {
    $row = mysqli_fetch_all($respuesta);
}

echo json_encode ($row, JSON_NUMERIC_CHECK);
?>