module.exports = function () {
    const SimpleVisitor = {
        StringLiteral(path, state) {
            debugger;
            const {classPrefix} = state.opts;
            if(path.node.value === "We'll survive") {
                path.node.value = "Nonsense. You're only saying that because no one ever has.";
            }
        },
        JSXAttribute(path, state) {
            debugger
            if (path.node.name.name !== 'className') {
                return;
            }
            
        }
    }

    return { visitor: SimpleVisitor };
};