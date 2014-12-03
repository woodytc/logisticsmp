<?php include_once './libs/Strategic.php'; ?>
<?php
ini_set('display_errors', 'On');
ini_set('error_reporting', E_ALL);
$entity = "";
$strategic = new Strategic();

if (isset($_GET['type'])) {
    
	if ($_GET['type'] == 'edit') {

        $result = $strategic->update($_POST);
        echo json_encode($result);

	} else if($_GET['type'] == 'add'){
		$result = $strategic->insert($_POST);
        
        echo json_encode($result);

    } else if($_GET['type'] == 'delete'){
    	
        $result = $strategic -> delete($_POST['id']);
    	
        echo json_encode($result);

    } else if($_GET['type']=='all'){
    	$entity = $strategic->getDataTable();
		echo json_encode($entity);

    }
    
}
?>