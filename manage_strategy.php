<?php include_once './libs/Strategy.php'; ?>
<?php
ini_set('display_errors', 'On');
ini_set('error_reporting', E_ALL);
$entity = "";
$strategy = new Strategy();

if (isset($_GET['type'])) {
    
	if ($_GET['type'] == 'edit') {

        $result = $strategy->update($_POST);
        echo json_encode(array('status'=> $result));

	} else if($_GET['type'] == 'add'){
		$result = $strategy->insert($_POST);
        
        echo json_encode(array('status'=> $result));

    } else if($_GET['type'] == 'delete'){
    	
        $result = $strategy -> delete($_POST['id']);
    	
        echo json_encode(array('status'=> $result));

    } else if($_GET['type']=='all'){
    	$result = $strategy->getDataTableWithPage($_GET['start'], $_GET['limit']);
    	
    	$total = $strategy->count();
    	
		echo json_encode(array('items'=>$result,'total'=>$total[0]["total"]) );

    }
    
}
?>