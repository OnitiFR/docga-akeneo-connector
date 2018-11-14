<?php

namespace Oniti\Docga\ConnectorBundle;

use Oniti\Docga\ConnectorBundle\DependencyInjection\Compiler\OroConfigCompilerPass;
use Oniti\Docga\ConnectorBundle\DependencyInjection\OnitiDocgaConnectorExtension;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class OnitiDocgaConnectorBundle extends Bundle
{
	public function build(ContainerBuilder $container)
	{
		parent::build($container);
		$container->addCompilerPass(new OroConfigCompilerPass());
	}

        public function getContainerExtension()
        {
            if (null === $this->extension) {
                $this->extension = new OnitiDocgaConnectorExtension();
            }

            return $this->extension;
        }
}
