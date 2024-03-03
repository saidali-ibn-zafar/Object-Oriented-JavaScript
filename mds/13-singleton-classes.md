# Singleton Classes

```js
class Settings {
  constructor() {
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }

    this.settingsObject = {
      background: "ff0000",
      version: Math.floor(Math.random() * 4000),
    };

    Object.freeze(this.settingsObject);
    Object.freeze(this);
    Settings.instance = this;
  }

  get(key) {
    return this.settingsObject[key];
  }
}

```

- The Settings class constructor checks if an instance of Settings already exists. If so, it returns that instance.
- If no instance exists, it proceeds to create one and initializes the settingsObject with default settings.
- It then freezes both the settingsObject and the instance itself to prevent modifications.
- Finally, it assigns this (the current instance) to the Settings.instance property, effectively making this instance available as a singleton.
