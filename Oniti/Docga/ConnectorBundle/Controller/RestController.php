<?php

namespace Oniti\Docga\ConnectorBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class RestController extends Controller
{
	/**
	 * Retourne la configuration
	 *
	 * @return JsonResponse
	 */
	public function getConfigAction(){
		$config = $this->get('oro_config.global');

		$values = [
			'baseurl' => $config->get('pim_oniti_docga_connector.base_url'),
			'api_key' => $config->get('pim_oniti_docga_connector.api_key'),
			'api_secret' => $config->get('pim_oniti_docga_connector.api_secret')
		];

		return new JsonResponse($values);
	}
}
