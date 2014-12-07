<?php
require_once 'PDOAdapter.php';
require_once 'BaseClass.php';
class Project extends BaseClass {
	function __construct() {
		/**
		 * Get DB
		 */
		parent::__construct ();
		$this->table = 'project';
	}
	function EntityEmptry() {
		$entity [0] ['id'] = '';
		$entity [0] ['strategic_id'] = '';
		$entity [0] ['strategy_id'] = '';
		$entity [0] ['seq'] = '';
		$entity [0] ['start_date'] = '';
		$entity [0] ['end_date'] = '';
		$entity [0] ['progress'] = '';
		$entity [0] ['budget'] = '';
		return $entity;
	}
	function getDataTable() {
		$sql = "select * from " . $this->table;
		
		$result = PDOAdpter::getInstance ()->select ( $sql );
		
		return $result;
	}
	function getDataTableWithPage($start, $limit) {
		//$sql = 'SELECT a.* , b.name as strategic_name FROM strategy a join strategic b on a.strategic_id = b.id ' . ' LIMIT ' . $start . ', ' . $limit . ' ';
		$sql = ''
				. ' select '
				. ' a. * , '
				. ' b.name strategic_name , '
				. ' c.name strategy_name '
				. ' from '.$this->table.' a '
				. ' join strategic b '
				. ' on b.id = a.strategic_id '
				. ' join strategy c '
				. ' on c.id = a.strategy_id LIMIT '.$start.', '.$limit.' ';
		//debug
		//echo $sql;
		$result = PDOAdpter::getInstance ()->select ( $sql );
		
		return $result;
	}
	function count() {
		$sql = $sql = 'SELECT count(1) as total FROM '.$this->table;
		$result = PDOAdpter::getInstance ()->select ( $sql );
		
		return $result;
	}
}