onEvent('recipes', event => {

    //禁用原版凝矿兰的所有转化
    event.remove({type: 'botania:orechid'})

    //添加自定义深板岩转化
    
    //煤
    event.custom({      
    "type": "botania:orechid",
    "input": "minecraft:deepslate", //输入
    "output": {
        "type": "block",
        "block": "minecraft:deepslate_coal_ore" //输出
    },
    "weight": 1 //权重
    })

    //铁
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "minecraft:deepslate_iron_ore" //输出
        },
        "weight": 1 //权重
    })

    //铜
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "minecraft:deepslate_copper_ore" //输出
        },
        "weight": 1 //权重
    })

    //金
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "minecraft:deepslate_gold_ore" //输出
        },
        "weight": 1 //权重
    })

    //红石
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "minecraft:deepslate_redstone_ore" //输出
        },
        "weight": 1 //权重
    })

    //绿宝石
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "minecraft:deepslate_emerald_ore" //输出
        },
        "weight": 1 //权重
    })

    //青金石
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "minecraft:deepslate_lapis_ore" //输出
        },
        "weight": 1 //权重
    })

    //钻石
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "minecraft:deepslate_diamond_ore" //输出
        },
        "weight": 1 //权重
    })

    //锇
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "mekanism:deepslate_osmium_ore" //输出
        },
        "weight": 1 //权重
    })

    //氟石
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "mekanism:deepslate_fluorite_ore" //输出
        },
        "weight": 1 //权重
    })

    //活化水晶
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "mysticalagriculture:deepslate_prosperity_ore" //输出
        },
        "weight": 1 //权重
    })

    //下级精华
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "mysticalagriculture:deepslate_inferium_ore" //输出
        },
        "weight": 1 //权重
    })

    //磷灰石
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "thermal:deepslate_apatite_ore" //输出
        },
        "weight": 1 //权重
    })

    //朱砂
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "thermal:deepslate_cinnabar_ore" //输出
        },
        "weight": 1 //权重
    })

    //硝石
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "thermal:deepslate_niter_ore" //输出
        },
        "weight": 1 //权重
    })

    //硫
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "thermal:deepslate_sulfur_ore" //输出
        },
        "weight": 1 //权重
    })

    //锡
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "thermal:deepslate_tin_ore" //输出
        },
        "weight": 1 //权重
    })

    //铅
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "thermal:deepslate_lead_ore" //输出
        },
        "weight": 1 //权重
    })

    //银
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "thermal:deepslate_silver_ore" //输出
        },
        "weight": 1 //权重
    })

    //镍
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "thermal:deepslate_nickel_ore" //输出
        },
        "weight": 1 //权重
    })

    //铝
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "immersiveengineering:deepslate_ore_aluminum" //输出
        },
        "weight": 1 //权重
    })

    //铀
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "immersiveengineering:deepslate_ore_uranium" //输出
        },
        "weight": 1 //权重
    })

    //赛特斯
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "ae2:deepslate_quartz_ore" //输出
        },
        "weight": 1 //权重
    })

    //锌
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "create:deepslate_zinc_ore" //输出
        },
        "weight": 1 //权重
    })

    //神秘水晶
    event.custom({      
        "type": "botania:orechid",
        "input": "minecraft:deepslate", //输入
        "output": {
    "type": "block",
    "block": "forbidden_arcanus:deepslate_arcane_crystal_ore" //输出
        },
        "weight": 1 //权重
    })





















})