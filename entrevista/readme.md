
# 1. Manipulación de Cadenas

- Palíndromo: Verificar si una cadena es un palíndromo. ✅
Ejemplo: "racecar" → true, "hello" → false
- Anagrama: Verificar si dos cadenas son anagramas.✅
Ejemplo: "listen" y "silent" → true
- Inversión de cadena: Escribir una función que invierta una cadena.✅
Ejemplo: "hello" → "olleh"
- Frecuencia de caracteres: Contar la cantidad de veces que aparece cada carácter en una cadena. ✅
Ejemplo: "hello" → {h: 1, e: 1, l: 2, o: 1}


# 2. Manipulación de Números
- Número primo: Determinar si un número es primo.✅
Ejemplo: 7 → true, 10 → false

- Fibonacci: Generar la secuencia de Fibonacci hasta un número dado. ✅
Ejemplo: 5 → [0, 1, 1, 2, 3]

- Factorial: Calcular el factorial de un número. ✅
Ejemplo: 5! → 120

- Números armstrong: Verificar si un número es un número armstrong. ✅
Ejemplo: 153 → true (1³ + 5³ + 3³ = 153)



# 3. Manipulación de Arreglos
- Eliminar duplicados: Escribir una función para eliminar duplicados en un arreglo. ✅
Ejemplo: [1, 2, 2, 3] → [1, 2, 3]

- Rotación de un arreglo: Rotar los elementos de un arreglo hacia la izquierda o la derecha. ✅
Ejemplo: [1, 2, 3, 4] (rotar a la derecha) → [4, 1, 2, 3]

- Buscar el número máximo/mínimo: Encontrar el elemento más grande o más pequeño en un arreglo. ✅
Ejemplo: [10, 5, 3] → 10

- Subarreglo con suma máxima (Kadane's Algorithm): Encontrar la suma más grande de un subarreglo contiguo. ❌
Ejemplo: [−2,1,−3,4,−1,2,1,−5,4] → 6 ([4,−1,2,1])



# 4. Lógica y Simulación
- FizzBuzz: Imprimir números del 1 al 100, pero: ✅
Si el número es divisible por 3, imprime "Fizz".
Si es divisible por 5, imprime "Buzz".
Si es divisible por ambos, imprime "FizzBuzz".

- Juego de escalones (staircase problem): Calcular de cuántas maneras puedes subir una escalera con n escalones si puedes subir 1 o 2 a la vez. ✔️
Ejemplo: n = 3 → 3 maneras (1+1+1, 1+2, 2+1)

- Validar paréntesis balanceados: Determinar si una cadena tiene paréntesis balanceados. ❌
Ejemplo: "([])" → true, "(]" → false


### 5. Estructuras de Datos
- Búsqueda en un árbol: Implementar una función para buscar un valor en un árbol binario. ❌

- Bubble Sort: Implementa el algoritmo de ordenamiento burbuja para ordenar un arreglo de números enteros en orden ascendente. Compara pares de elementos adyacentes e intercámbialos si están en el orden incorrecto.
Entrada: [5, 3, 8, 1, 2] --> Salida: [1, 2, 3, 5, 8]

Primera pasada:
[5, 3, 8, 1, 2]  → Compara 5 y 3, intercambia → [3, 5, 8, 1, 2]
[3, 5, 8, 1, 2]  → Compara 5 y 8, no cambia   → [3, 5, 8, 1, 2]
[3, 5, 8, 1, 2]  → Compara 8 y 1, intercambia → [3, 5, 1, 8, 2]
[3, 5, 1, 8, 2]  → Compara 8 y 2, intercambia → [3, 5, 1, 2, 8]

- Selection Sort: Implementa el algoritmo de ordenamiento por selección para ordenar un arreglo de números enteros en orden ascendente. Encuentra el número más pequeño en el arreglo y colócalo en la primera posición, luego repite el proceso con los siguientes elementos.
Entrada: [29, 10, 14, 37, 13] --> Salida: [10, 13, 14, 29, 37]

[5, 3, 8, 1, 2]  → Encuentra el más pequeño (1), lo intercambia con 5
[1, 3, 8, 5, 2]  → Encuentra el siguiente más pequeño (2), lo intercambia con 3
[1, 2, 8, 5, 3]  → Encuentra el siguiente más pequeño (3), lo intercambia con 8
[1, 2, 3, 5, 8]  → Encuentra el siguiente más pequeño (5), ya está en su lugar


- Insertion sort: Implementa el algoritmo de ordenamiento por inserción para ordenar un arreglo de números enteros en orden ascendente. Toma cada número y colócalo en su posición correcta dentro de la parte ya ordenada del arreglo.
Entrada: [7, 3, 5, 1, 9] --> Salida: [1, 3, 5, 7, 9]

[5] 3 8 1 2  → Toma 3 y lo inserta antes de 5 → [3, 5] 8 1 2
[3, 5] 8 1 2 → Toma 8, ya está en su lugar → [3, 5, 8] 1 2
[3, 5, 8] 1 2 → Toma 1 y lo coloca antes de 3 → [1, 3, 5, 8] 2
[1, 3, 5, 8] 2 → Toma 2 y lo coloca antes de 3 → [1, 2, 3, 5, 8]


- Pilas y Colas:
- Implementar una pila (stack) o cola (queue).
- Usar una pila para verificar paréntesis balanceados.
- Hashmaps: Usar un mapa para contar elementos o buscar valores.


6. Problemas de Matemáticas
Suma de dos números: Dado un arreglo y un número objetivo, encuentra dos números que sumen el objetivo.
Ejemplo: [2, 7, 11, 15], target = 9 → [2, 7]
Multiplicación de matrices: Escribir una función para multiplicar dos matrices.
Números felices: Determinar si un número es un número feliz.
Ejemplo: 19 → true


7. Algoritmos de Búsqueda
Búsqueda binaria: Implementar una búsqueda binaria en un arreglo ordenado.
Ejemplo: Buscar 6 en [1, 3, 6, 7, 9] → índice 2
Buscar el primer y último índice: Dado un arreglo ordenado, encontrar las posiciones inicial y final de un número objetivo.


8. Problemas Combinatorios
Permutaciones y combinaciones: Generar todas las permutaciones posibles de un conjunto de elementos.
Subconjuntos: Encontrar todos los subconjuntos de un arreglo.
Ejemplo: [1, 2] → [[], [1], [2], [1, 2]]