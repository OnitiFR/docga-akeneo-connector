<?php
namespace Oniti\Docga\ConnectorBundle\ArrayConverter\FlatToStandard\Product\ValueConverter;

use Pim\Component\Connector\ArrayConverter\FlatToStandard\Product\FieldSplitter;
use Pim\Component\Connector\ArrayConverter\FlatToStandard\Product\ValueConverter\AbstractValueConverter;

class DocgaValueConverter extends AbstractValueConverter
{
	public function __construct(FieldSplitter $fieldSplitter){
		$this->supportedFieldType = ['oniti_catalog_docga'];

		parent::__construct($fieldSplitter);
	}

	/**
	* Converts a value
	*
	* @param string $attributeCode
	* @param mixed  $data
	*
	* @return array
	*/
	public function convert(array $attributeFieldInfo, $value){
		$result = [
			$attributeFieldInfo['attribute']->getCode() => [
				[
					'locale' => $attributeFieldInfo['locale_code'],
					'scope'  => $attributeFieldInfo['scope_code'],
					'data'   => trim((string)$value),
				],
			],
		];

		return $result;
	}

}
