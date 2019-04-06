const utils = {

  /**
   * debounce callback for specified interval
   * @param callback function to debounce
   * @param interval time in ms to debounce
   * @returns debounced callback
   */
  simpleDebounce(callback: Function, interval: number): EventListener {
    let timer = setTimeout(callback, interval);

    return () => {
      clearTimeout(timer);
      timer = setTimeout(callback, interval);
    }
  }
}

export default utils;
