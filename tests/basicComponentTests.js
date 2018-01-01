import configureMockStore from 'redux-mock-store';
import { INITIAL_STATE } from 'common/ducks';

const mockStore = configureMockStore();

/**
 * Shallow render the given component.
 *
 * @param {jsx} Component The component to be tested
 * @returns {void}
 */
export function shouldShallowRender(Component) {
  it('should render the component', () => {
    expect(shallow(Component)).toMatchSnapshot();
  });
}

/**
 * Creates a new application store mock
 *
 * @returns {Object} The store mock
 */
export const createStoreMock = () => mockStore(INITIAL_STATE);

/**
 * Execute the basic tests for the given component.
 *
 * @param {jsx} Component The component to be tested
 * @param {Object} options The options for testing
 * @param {Object} options.isConnected If the passed component is redux-connected
 * @returns {void}
 */
export default function basicComponentTests(Component, options) {
  shouldShallowRender(Component, options);
}
