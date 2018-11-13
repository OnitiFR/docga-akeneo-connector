<?php

namespace Oniti\Docga\ConnectorBundle\ArrayConverter\StandardToFlat\Product\ValueConverter;

use Pim\Component\Connector\ArrayConverter\FlatToStandard\Product\AttributeColumnsResolver;
use Pim\Component\Connector\ArrayConverter\StandardToFlat\Product\ValueConverter\AbstractValueConverter;
use Pim\Component\Connector\ArrayConverter\StandardToFlat\Product\ValueConverter\ValueConverterInterface;

class DocgaValueConverter extends AbstractValueConverter implements ValueConverterInterface
{
	public function __construct(
			AttributeColumnsResolver $columnsResolver
	) {
		parent::__construct($columnsResolver, ['oniti_catalog_docga']);
	}

	/**
	 * Converts a value
	 *
	 * @param string $attributeCode
	 * @param mixed  $data
	 *
	 * @return array
	 */
	public function convert($attributeCode, $data)
	{
            $convertedItem = [];

            foreach ($data as $value) {
                $flatName = $this->columnsResolver->resolveFlatAttributeName(
                        $attributeCode,
                        $value['locale'],
                        $value['scope']
                );

				$convertedItem[$flatName] = $value['data'];
            }

            return $convertedItem;
	}
}
