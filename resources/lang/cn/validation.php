<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => '注意: :attribute 为必填.',
    'active_url'           => '注意: :attribute 是不可用的链接.',
    'after'                => '注意: :attribute 必须为一个在 :date  之后的时间.',
    'alpha'                => '注意: :attribute 只允许全部为字母.',
    'alpha_dash'           => '注意: :attribute 只允许字幕，数字和_连接符.',
    'alpha_num'            => '注意: :attribute 只允许字幕和数字.',
    'array'                => '注意: :attribute 必须为数组.',
    'before'               => '注意: :attribute 必须为一个在 :date 之前的时间.',
    'between'              => [
        'numeric' => '注意: :attribute 必须在 :min 至 :max 之间.',
        'file'    => '注意: :attribute 必须限制在 :min 至 :max k.',
        'string'  => '注意: :attribute 必须在 :min 至 :max 字符.',
        'array'   => '注意: :attribute 必须包含 :min 至 :max 键.',
    ],
    'boolean'              => '注意: :attribute 字段必须为 true 或 false.',
    'confirmed'            => '注意: :attribute 确认不匹配.',
    'date'                 => '注意: :attribute 是一个不可用的时间.',
    'date_format'          => '注意: :attribute 不匹配: format :format.',
    'different'            => '注意: :attribute 和 :other 必须不同.',
    'digits'               => '注意: :attribute 必须 :digits 数值.',
    'digits_between'       => '注意: :attribute 必须在 :min 至 :max 数值之间.',
    'dimensions'           => '注意: :attribute 有无效的图片尺寸.',
    'distinct'             => '注意: :attribute 字段具有重复的值.',
    'email'                => '注意: :attribute 必须为可用的邮箱地址.',
    'exists'               => '注意: 选中的 :attribute 不存在.',
    'file'                 => '注意: :attribute 必须为一个文件.',
    'filled'               => '注意: :attribute 字段必填.',
    'image'                => '注意: :attribute 必须为图片.',
    'in'                   => '注意: 选中的 :attribute 不可以.',
    'in_array'             => '注意: :attribute 字段未出现在 :other 其中.',
    'integer'              => '注意: :attribute 必须为整数.',
    'ip'                   => '注意: :attribute 必须为合法的IP地址.',
    'json'                 => '注意: :attribute 必须为合法的JSON格式数据.',
    'max'                  => [
        'numeric' => '注意: :attribute 不可以比 :max 大.',
        'file'    => '注意: :attribute 不能超过 :max 千字节.',
        'string'  => '注意: :attribute 不可超过 :max 个字符.',
        'array'   => '注意: :attribute 不能超过 :max 个键值对.',
    ],
    'mimes'                => '注意: :attribute 必须为: :values 类型的文件.',
    'min'                  => [
        'numeric' => '注意: :attribute 必须最小为 :min.',
        'file'    => '注意: :attribute 必须至少 :min 千字节.',
        'string'  => '注意: :attribute 必须至少 :min 字符.',
        'array'   => '注意: :attribute 必须至少包含 :min 个键值对.',
    ],
    'not_in'               => '注意: 选中的 :attribute 不合法.',
    'numeric'              => '注意: :attribute 必须为数字.',
    'present'              => '注意: :attribute 必须出现.',
    'regex'                => '注意: :attribute 格式不合规范.',
    'required'             => '注意: :attribute 字段必填.',
    'required_if'          => '注意: :attribute 字段必填当 :other 即 :value.',
    'required_unless'      => '注意: :attribute 必填除非 :other 在 :values 其中.',
    'required_with'        => '注意: :attribute 必填当 :values 出现.',
    'required_with_all'    => '注意: :attribute 字段必填当 :values 出现.',
    'required_without'     => '注意: :attribute 字段必填当 :values 没有出现.',
    'required_without_all' => '注意: :attribute 字段必填当 :values 无一可用.',
    'same'                 => '注意: :attribute 和 :other 必须保持一致.',
    'size'                 => [
        'numeric' => '注意: :attribute 必须 :size.',
        'file'    => '注意: :attribute 必须包含 :size 千字节.',
        'string'  => '注意: :attribute 必须包含 :size 字符.',
        'array'   => '注意: :attribute 必须包含 :size 键.',
    ],
    'string'               => '注意: :attribute 必须为字符.',
    'timezone'             => '注意: :attribute 时区必须为合理的时区.',
    'unique'               => '注意: :attribute 已经被占用，请更换.',
    'url'                  => '注意: :attribute 格式不可用.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using 注意:
    | convention "attribute.rule" to name 注意: lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | 注意: following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [],

];
