<?php
require_once 'PDOAdapter.php';
require_once 'BaseClass.php';
class Strategy extends BaseClass {
	function __construct() {
		/**
		 * Get DB
		 */
		parent::__construct ();
		$this->table = 'strategy';
	}
	function EntityEmptry() {
		$entity [0] ['id'] = '';
		$entity [0] ['strategic_id'] = '';
		$entity [0] ['name'] = '';
		$entity [0] ['seq'] = '';
		return $entity;
	}
	function getDataTable() {
		$sql = "select * from " . $this->table;
		
		$result = PDOAdpter::getInstance ()->select ( $sql );
		
		return $result;
	}
	function getDataTableWithPage($start, $limit) {
		$sql = 'SELECT a.* , b.name as strategic_name FROM strategy a join strategic b on a.strategic_id = b.id ' . ' LIMIT ' . $start . ', ' . $limit . ' ';
		$result = PDOAdpter::getInstance ()->select ( $sql );
		
		return $result;
	}
	function count() {
		$sql = $sql = 'SELECT count(1) as total FROM strategy ';
		$result = PDOAdpter::getInstance ()->select ( $sql );
		
		return $result;
	}
}