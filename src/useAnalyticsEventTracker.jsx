import ReactGA from 'react-ga';

const useAnalyticsEventTracker = (category = 'Category') => {
  const eventTracker = (action = 'test action', label = 'test label') => {
    console.log(category, action, label);
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
