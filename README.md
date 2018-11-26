![DocGa - Attribut Akeneo](Oniti/Docga/ConnectorBundle/Resources/public/images/logo.png)
# DocGa -  Attribut Akeneo

## Prérequis

| Akeneo PIM Community Edition |
|:----------------------------:|
    | v1.7.*                   |

## Installation
```bash
    composer require oniti/docga-akeneo-connector
```

A la fin du fichier app/config/routing.yml :
```yaml
docga:
    resource: "@EindenEphotoConnectorBundle/Resources/config/routing.yml"
```

Activer le bundle dans `app/AppKernel.php`:
```php
protected function registerProjectBundles()
{
    return [
        // ...
        new Oniti\Docga\ConnectorBundle\OnitiDocgaConnectorBundle()
    ];
}

```

Enfin à la racine du projet:
```bash
php app/console cache:clear --env=prod
php app/console pim:installer:assets --env=prod
php app/console oro:translation:dump en fr en_US en_UK fr_FR --env=prod
```
Lancez ensuite Akeneo et dans system/configuration/docga renseigné l'url du serveur ainsi que les clefs d'api a utiliser
