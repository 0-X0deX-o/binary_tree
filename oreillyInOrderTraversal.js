function inOrder(node)
{
    if (node !== null)
    {
        inOrder(node.left);
        putstr(node.show() + " ");
        inOrder(node.right);
    }
}

//how does the load(); function work in js