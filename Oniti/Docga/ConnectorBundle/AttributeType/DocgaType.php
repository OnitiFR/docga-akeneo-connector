<?php

/*
 * This file is part of the Ephoto Connector Bundle package.
 */

namespace Oniti\Docga\ConnectorBundle\AttributeType;

use Pim\Bundle\CatalogBundle\AttributeType\AbstractAttributeType;
use Pim\Component\Catalog\Model\AttributeInterface;

class DocgaType extends AbstractAttributeType
{
	public function getName()
	{
		return 'onti_catalog_docga';
	}
}
