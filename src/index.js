import fs from 'fs';

const version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version
const buildAt = Date.now()

export default function ({ types: t }) {
  return {
    visitor: {
      ReferencedIdentifier(path) {
        if (path.node.name === "__VERSION__") {
          path.replaceWith(t.valueToNode(version));
        }
        if (path.node.name === '__BUILD_TIME__') {
          path.replaceWith(t.valueToNode(buildAt));
        }
      }
    }
  };
}
