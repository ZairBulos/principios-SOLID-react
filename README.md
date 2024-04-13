# Principios SOLID en React JS

## Single Responsibility Principle

El Principio de Responsabilidad Única dice que una clase debe hacer una cosa y, por lo tanto, debe tener una sola razón para cambiar.

## Open-Closed Principle

El principio de abierto-cerrado exige que las clases deban estar abiertas a la extensión y cerradas a la modificación.

Modificación significa cambiar el código de una clase existente y extensión significa agregar una nueva funcionalidad.

## Liskov Substitution Principle

El Principio de Sustitución de Liskov establece que las subclases deben ser sustituibles por sus clases base.

Esto significa que, dado que la clase B es una subclase de la clase A, deberíamos poder pasar un objeto de la clase B a cualquier método que espere un objeto de la clase A y el método no debería dar ningún resultado extraño en ese caso.

Este es el comportamiento esperado, porque cuando usamos la herencia asumimos que la clase secundaria hereda todo lo que tiene la superclase. La clase secundaria extiende el comportamiento pero nunca lo reduce.

## Interface Segregation Principle

La segregación significa mantener las cosas separadas, y el Principio de Segregación de Interfaces se trata de separar las interfaces.

El principio establece que muchas interfaces específicas del cliente son mejores que una interfaz de propósito general. No se debe obligar a los clientes a implementar una función que no necesitan.

## Dependency Inversion Principle

El principio de inversión de dependencia establece que nuestras clases deben depender de interfaces o clases abstractas en lugar de clases y funciones concretas.