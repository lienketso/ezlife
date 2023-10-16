<?php
/**
 * AssignCPCategorySelector.php
 * Created by: doanloc.dev
 * Created at: 24/05/2022
 * Contact me at: doanloc.dev@gmail.com
 */

namespace Botble\Stock\Forms\Fields;

use DB;

class AssignCPCategorySelector
{
    /**
     * @return string
     */
    public static function render($package)
    {
        $category = DB::table('cp_category')
        ->where('status', '=', 'published')
        ->select('id','name')
        ->orderBy('name', 'ASC')
        ->get();

        return view('plugins/stock::forms.partials.category', compact('category', 'package'));
    }
}
