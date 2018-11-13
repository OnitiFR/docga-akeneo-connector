<?php

/*
 *  Détermine le nom de l'attribut
 */

namespace Oniti\Docga\ConnectorBundle\AttributeType;

use Pim\Bundle\CatalogBundle\AttributeType\AbstractAttributeType;
use Pim\Component\Catalog\Model\AttributeInterface;

class DocgaType extends AbstractAttributeType
{
	public function getName()
	{
		return 'oniti_catalog_docga';
	}
}
