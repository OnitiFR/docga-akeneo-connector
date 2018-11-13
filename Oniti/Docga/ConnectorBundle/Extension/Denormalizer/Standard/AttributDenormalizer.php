<?php
/**
 * Denormalize attribute
 */

namespace Oniti\Docga\ConnectorBundle\Extension\Denormalizer\Standard;

use Pim\Component\Catalog\Denormalizer\Standard\ProductValue\AbstractValueDenormalizer;

class AttributDenormalizer extends AbstractValueDenormalizer
{
    public function denormalize($data, $class, $format = null, array $context = [])
    {
        return '' === $data ? null : $data;
    }
}
