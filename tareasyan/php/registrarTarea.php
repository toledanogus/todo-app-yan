<?php
require 'conection.php';

$json_data = file_get_contents("php://input");
$x = json_decode($json_data);

if ($x->category === 'juntos') {
    mysqli_query($conn, "INSERT INTO tareasjuntos (titulo, descripcion, prioridad, categoria, completada, fechalimite) VALUES ('".$x->title."', '".$x->description."', '".$x->priority."', '".$x->category."', 0, '".$x->limitDate."')");
}else{
    mysqli_query($conn, "INSERT INTO tareasyan (titulo, descripcion, prioridad, categoria, completada, fechalimite) VALUES ('".$x->title."', '".$x->description."', '".$x->priority."', '".$x->category."', 0, '".$x->limitDate."')");
}



$respuesta = mysqli_query($conn, "SELECT titulo, descripcion, prioridad, categoria, completada, fechalimite FROM tareasyan");

$row = mysqli_fetch_all($respuesta);
//echo $row;
echo json_encode ($row, JSON_NUMERIC_CHECK);
?>