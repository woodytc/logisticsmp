<?php include_once './libs/Strategic.php'; ?>
<?php
ini_set('display_errors', 'On');
ini_set('error_reporting', E_ALL);
$entity = "";
$strategic = new Strategic();
//$entity = $strategic->getDataTable();
//echo json_encode($entity);
//echo json_encode($entity);

if (isset($_GET['type'])) {
    
	if ($_GET['type'] == 'edit') {

        $entity = $home->selectByid($_GET['id']);

	} else if($_GET['type'] == 'add'){
		//getdata from form 
        //$entity = $home->EntityEmptry();
        //var_dump($_POST);
		$result = $strategic->insert($_POST);
        
        json_encode($result);

    } else if($_GET['type'] == 'delete'){
        
    	$entity = $home->EntityEmptry();

    } else if($_GET['type']=='all'){
    	$entity = $strategic->getDataTable();
		echo json_encode($entity);

	}
    
}
?>