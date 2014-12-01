<?php
$y =  date("Y");
$year = array();
for ($x = ($y-10); $x <= ($y+1); $x++)
{
	$array['id'] = $x;
	$array['year'] = $x;
	array_push($year, $array);
}
echo json_encode($year);