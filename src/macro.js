const { createMacro } = require("babel-plugin-macros");

export default createMacro(webpackCommentImportMacros);

function webpackCommentImportMacros({ references, state, babel }) {
  references.default.map(referencePath => {
    if (referencePath.parentPath.type === "CallExpression") {
      requireWebpackCommentImport({ referencePath, state, babel });
    } else {
      throw new Error(
        `This is not supported: \`${referencePath
          .findParent(babel.types.isExpression)
          .getSource()}\`. Please see the webpack-comment-import.macro documentation`,
      );
    }
  });
}

function requireWebpackCommentImport({ referencePath, state, babel }) {
  // TODO implement
}
