

// - Búsqueda en un árbol: Implementar una función para buscar un valor en un árbol binario.

function searchInTree(tree, target){
    console.log("-------------------")
    console.log(tree)
    console.log("-------------------")

    if (tree === null) return false;

        // If the current node's value is the target, return true
        if (tree.value === target) return true;


    // Recursively search in left and right subtrees
    return searchInTree(tree.left, target) || searchInTree(tree.right, target);

   
 

}


class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
// Tree 1
//         5
//        / \
//       3   8
//      / \   \
//     2   4   10
const tree1 = new TreeNode(5);
tree1.left = new TreeNode(3);
tree1.right = new TreeNode(8);
tree1.left.left = new TreeNode(2);
tree1.left.right = new TreeNode(4);
tree1.right.right = new TreeNode(10);

// console.log(tree1)


console.log(searchInTree(tree1, 2));   // Expected output: true

