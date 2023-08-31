import{_ as e,c as t,o as a,a as d}from"./app.66b46ee5.js";const f=JSON.parse('{"title":"Reference","description":"","frontmatter":{},"headers":[{"level":2,"title":"default_disk","slug":"default-disk"},{"level":2,"title":"available_disks","slug":"available-disks"},{"level":2,"title":"show_hidden_files","slug":"show-hidden-files"},{"level":2,"title":"human_readable_size","slug":"human-readable-size"},{"level":2,"title":"human_readable_datetime","slug":"human-readable-datetime"},{"level":2,"title":"file_analysis.enabled","slug":"file-analysis-enabled"},{"level":2,"title":"file_analysis.cache.enabled","slug":"file-analysis-cache-enabled"},{"level":2,"title":"file_analysis.cache.ttl_in_seconds","slug":"file-analysis-cache-ttl-in-seconds"},{"level":2,"title":"url_signing.enabled","slug":"url-signing-enabled"},{"level":2,"title":"url_signing.unit","slug":"url-signing-unit"},{"level":2,"title":"url_signing.value","slug":"url-signing-value"},{"level":2,"title":"update_checker.enabled","slug":"update-checker-enabled"},{"level":2,"title":"update_checker.ttl_in_days","slug":"update-checker-ttl-in-days"},{"level":2,"title":"tour.enabled","slug":"tour-enabled"},{"level":2,"title":"use_pintura","slug":"use-pintura"},{"level":2,"title":"path","slug":"path"},{"level":2,"title":"upload_replace_existing","slug":"upload-replace-existing"}],"relativePath":"configuration.md"}'),l={name:"configuration.md"},i=d('<h1 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-hidden="true">#</a></h1><h2 id="default-disk" tabindex="-1"><code>default_disk</code> <a class="header-anchor" href="#default-disk" aria-hidden="true">#</a></h2><p>The default disk used by the package</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>public</code></td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>The default disk must be defined in your <code>filesystems.php</code> config.</p></div><h2 id="available-disks" tabindex="-1"><code>available_disks</code> <a class="header-anchor" href="#available-disks" aria-hidden="true">#</a></h2><p>Provides a list of available disks to be used by the package</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>string[]</code></td><td><code>[&#39;public&#39;]</code></td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>Each disk must be defined in your <code>filesystems.php</code> config.</p></div><h2 id="show-hidden-files" tabindex="-1"><code>show_hidden_files</code> <a class="header-anchor" href="#show-hidden-files" aria-hidden="true">#</a></h2><p>Toggles whether to show files and folders that start with a &quot;dot&quot;</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>false</code></td></tr></tbody></table><h2 id="human-readable-size" tabindex="-1"><code>human_readable_size</code> <a class="header-anchor" href="#human-readable-size" aria-hidden="true">#</a></h2><p>When set to true, the package will display file sizes in a more friendly readable format</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>true</code></td></tr></tbody></table><h2 id="human-readable-datetime" tabindex="-1"><code>human_readable_datetime</code> <a class="header-anchor" href="#human-readable-datetime" aria-hidden="true">#</a></h2><p>When set to true, the package will display dates with <code>diffForHumans()</code></p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>true</code></td></tr></tbody></table><h2 id="file-analysis-enabled" tabindex="-1"><code>file_analysis.enabled</code> <a class="header-anchor" href="#file-analysis-enabled" aria-hidden="true">#</a></h2><p>When set to true, the package will use getID3 to parse metadata from the files</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>true</code></td></tr></tbody></table><h2 id="file-analysis-cache-enabled" tabindex="-1"><code>file_analysis.cache.enabled</code> <a class="header-anchor" href="#file-analysis-cache-enabled" aria-hidden="true">#</a></h2><p>When set to true, the package will cache the file analysis result</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>true</code></td></tr></tbody></table><h2 id="file-analysis-cache-ttl-in-seconds" tabindex="-1"><code>file_analysis.cache.ttl_in_seconds</code> <a class="header-anchor" href="#file-analysis-cache-ttl-in-seconds" aria-hidden="true">#</a></h2><p>TTL for analysis caching in seconds</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>int</code></td><td><code>86400</code></td></tr></tbody></table><h2 id="url-signing-enabled" tabindex="-1"><code>url_signing.enabled</code> <a class="header-anchor" href="#url-signing-enabled" aria-hidden="true">#</a></h2><p>When set to true, all the file urls will be signed</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>false</code></td></tr></tbody></table><h2 id="url-signing-unit" tabindex="-1"><code>url_signing.unit</code> <a class="header-anchor" href="#url-signing-unit" aria-hidden="true">#</a></h2><p>Defines the unit for the expiration time</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>minutes</code></td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>The expiration time must not exceed 1 week</p></div><h2 id="url-signing-value" tabindex="-1"><code>url_signing.value</code> <a class="header-anchor" href="#url-signing-value" aria-hidden="true">#</a></h2><p>Defines the value for the expiration time</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>true</code></td></tr></tbody></table><h2 id="update-checker-enabled" tabindex="-1"><code>update_checker.enabled</code> <a class="header-anchor" href="#update-checker-enabled" aria-hidden="true">#</a></h2><p>Toggles whether to show the update checker banner</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>true</code></td></tr></tbody></table><h2 id="update-checker-ttl-in-days" tabindex="-1"><code>update_checker.ttl_in_days</code> <a class="header-anchor" href="#update-checker-ttl-in-days" aria-hidden="true">#</a></h2><p>TTL for analysis caching the update checker status in days</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>int</code></td><td><code>1</code></td></tr></tbody></table><h2 id="tour-enabled" tabindex="-1"><code>tour.enabled</code> <a class="header-anchor" href="#tour-enabled" aria-hidden="true">#</a></h2><p>Toggles whether to show the package tour</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>true</code></td></tr></tbody></table><h2 id="use-pintura" tabindex="-1"><code>use_pintura</code> <a class="header-anchor" href="#use-pintura" aria-hidden="true">#</a></h2><p>Toggles whether to show use Pintura image editor</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>false</code></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>You can find details about the Pintura integration in the <a href="/nova-file-manager/pintura.html">Pintura image editor section</a>.</p></div><h2 id="path" tabindex="-1"><code>path</code> <a class="header-anchor" href="#path" aria-hidden="true">#</a></h2><p>This is the URI path where File Manager will be accessible from</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>/nova-file-manager</code></td></tr></tbody></table><h2 id="upload-replace-existing" tabindex="-1"><code>upload_replace_existing</code> <a class="header-anchor" href="#upload-replace-existing" aria-hidden="true">#</a></h2><p>Toggle whether an upload with an existing file name should replace the existing file or not</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>bool</code></td><td><code>false</code></td></tr></tbody></table>',56),h=[i];function o(r,s,c,n,u,b){return a(),t("div",null,h)}var g=e(l,[["render",o]]);export{f as __pageData,g as default};
