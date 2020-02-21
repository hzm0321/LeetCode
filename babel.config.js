/*
 * babel.config - TODO
 * @date: 2019/9/7
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
};
