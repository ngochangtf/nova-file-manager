<?php

declare(strict_types=1);

namespace BBSLab\NovaFileManager\Http\Requests;

use BBSLab\NovaFileManager\Rules\DiskExistsRule;
use BBSLab\NovaFileManager\Rules\PathExistsInDiskRule;

/**
 * @property-read ?string $disk
 * @property-read string $path
 */
class DeleteFolderRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'disk' => ['sometimes', 'string', new DiskExistsRule()],
            'path' => ['sometimes', 'string', new PathExistsInDiskRule($this->get('disk'))],
        ];
    }
}