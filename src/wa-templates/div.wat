

(module
  (func $div (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.div_u)
  (export "div" (func $div))
)