# dl-context

Context base on nh-context for FiveM

## Installation

Add `dl-context` resource to your server resources

```cfg
ensure dl-context
```

## Usage

```lua
exports["dl-context"]:OpenContext(
    {
        {
            id = 1,
            label = "Label",
            description = "description",
            settings = {
                event = "",
            }
        }
    }
)
```

## Pull request

Pull requests are welcome. for major changes, please open an issu first to discuss what you would like to change.

## Credits

Credits to NeroHiro creator of `nh-context`