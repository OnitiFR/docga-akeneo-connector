<?php
/*
 * This file is part of the Ephoto Connector Bundle package.
 */

namespace Oniti\Docga\ConnectorBundle\Enrich\Provider\Field;

use Pim\Bundle\EnrichBundle\Provider\Field\FieldProviderInterface;
use Pim\Component\Catalog\Model\AttributeInterface;

class DocgaFieldProvider implements FieldProviderInterface
{
	public function getField($attribute)
	{
		return 'oniti-docga-field';
	}

	public function supports($element)
	{
		return $element instanceof AttributeInterface &&
				$element->getAttributeType() === 'oniti_catalog_docga';
	}
}
