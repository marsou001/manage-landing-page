module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {    
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
    // TSX!!! not JSX! This is the source of the problem... You idiot!!!
  },
};
