<?php
    namespace Oniti\Docga\ConnectorBundle\Comparator\Attribute;

    use Pim\Component\Catalog\Comparator\ComparatorInterface;

    class DocgaComparator implements ComparatorInterface
    {

        public function supports($type){
            return $type === 'oniti_catalog_docga';
        }

        public function compare($data, $originals){
            $default = ['locale' => null, 'scope' => null, 'data' => null];
            $originals = array_merge($default, $originals);

            return (string)$data['data'] !== (string)$originals['data'] ? $data : null;
        }

    }
