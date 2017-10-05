---
layout: post
comments: true
title: "[PHP] Migrations in Laravel"
tags: [programming, php, laravel, back-end, technology]
img: ['laravel.png']
---

Migrations have the role of tracking all changes we need to make in our databases since the moment of its creation. It’s pretty much described by Laravel as a version control.

**php artisan make:migration**

This will create a new migration file. Essentially, it contains two functions: up and down. Up is the actual change you’d like to make, while down is supposed to have the backwards operation you’d use to rollback to previous state.

```php
<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class AddConstraintMyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('myTable', function (Blueprint $table) {
           $table->unique('link');
           $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('myTable', function (Blueprint $table) {
            $table->dropUnique('offers_link_unique');
        });
    }
}
?>
```

[This snippet on Github Gist](https://gist.github.com/anazard/47b3af3f1fa3de6c5cbfbeffd16da990)

Notice how the migration is done in the up function and its counterpart down. Laravel chooses a reasonable name for the index, therefore it has to be used in order to be rolled back. Otherwise, you’ll get an error when trying to undo your last migration.

$table->timestamps() is responsible for creating two timestamp fields, created_at and updated_at, making it easier to track changes in your data.
